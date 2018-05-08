// Add you config info here...
var config = {
};

// Initialize Firebase
firebase.initializeApp(config);

// Our Code
// Connect to the todos table in your Firebase Project
const todoList = firebase.database().ref('todos')

// Retrieve all the todos from Firebase and add them to the site
// Every time we add a todo task, Firebase automatically sends a child_added
// event to our website.
// prepend adds the todo task to the beginning (top) of the list
todoList.on('child_added', function(data) {
  const id = data.key
  const task = data.val()

  console.log(id, task)

  if (task.completed) {
    $('#complete-tasks').prepend(`
      <div class='card' id='todo-${id}'>
        <div class='card-body'>
          ${task.task}
          <a href="#" class="float-right btn btn-info" data-id='${id}'>Delete</a>
          <a href="#" class="float-right btn btn-danger toggle-complete" data-id='${id}' data-task='${task.task}' data-completed='${task.completed}'>
            Mark NOT Complete
          </a>
        </div>
      </div>
    `)
  } else {
    $('#incomplete-tasks').prepend(`
      <div class='card' id='todo-${id}'>
        <div class='card-body'>
          ${task.task}
          <a href="#" class="float-right btn btn-info" data-id='${id}'>Delete</a>
          <a href="#" class="float-right btn btn-success toggle-complete" data-id='${id}' data-task='${task.task}' data-completed='${task.completed}'>
            Mark Complete
          </a>
        </div>
      </div>
    `)
  }

  // This is adding a JavaScript click event handler to each delete button
  $(".btn.btn-info").click(function(event) {
    event.preventDefault();

    const id = $(this).data('id')

    todoList.child(id).remove();

    // this is the equivalent of the below line
    // firebase.database().ref(`todos/${id}`).remove()
  });
})

// Removes the todo task from the webpage
todoList.on('child_removed', function(data) {
  const id = data.key;
  $(`#todo-${id}`).fadeOut();
})

$(document).ready(function() {
  $('form#task-form').submit(function(event) {
    event.preventDefault()

    const task = $('#body').val()

    todoList.push({ task: task, completed: false })

    $('#body').val('')
  })

  // Updating with Firebase is a bit complicated, and requires more code that
  // you are not familiar with. Here we are working around the problem by
  // copying the properties of the todo, deleting it and recreating the todo.
  // We are selecting the the properties from the html 5 data attribute.
  $('#tasks').on('click', '.toggle-complete', function() {
    const id = $(this).data('id')
    const task = $(this).data('task')
    const completed = $(this).data('completed')

    // Hiding the task
    $(`#todo-${id}`).fadeOut()

    // Delete the task
    firebase.database().ref(`todos/${id}`).remove()

    // recreate the task
    todoList.push({ task: task, completed: !completed })
  })
})
