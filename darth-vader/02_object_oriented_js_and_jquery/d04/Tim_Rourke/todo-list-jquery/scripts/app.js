/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm:  dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

window.onload = function() {

  var addTodo = document.getElementById('addTodo');
  var todoList = document.getElementById('todoList');

  var addTodoForm = {
    dateDue: document.getElementById('dateDue'),
    dateCreated: document.getElementById('todoCreated'),
    todoId: document.getElementById('todoId'),
    todoTask: document.getElementById('itemText')
  }

  var todos = [{
    id: 'exampleItem',
    todoCreated: new Date(),
    todoDue: new Date(),
    itemText: 'This is an example item. Edit or delete it to get started!'
  }];

  function resetForm() {
    addTodoForm.dateDue.value = new Date().toLocaleDateString('en-GB').split(' ')[0].split('/').reverse().join('-');
    addTodoForm.dateCreated.value = "";
    addTodoForm.todoTask.value = "";
    addTodoForm.todoId.value = "";
  }
  resetForm();

  function updateList() {
    todoList.innerHTML = "";

    var newList = "";

    for (item in todos) {
      var currentDate = new Date(todos[item].todoCreated);
      currentDate.setTime( currentDate.getTime() + currentDate.getTimezoneOffset()*60*1000 );
      currentDate = currentDate.format('mm/dd/yyyy');

      var dueDate = new Date(todos[item].todoDue);
      dueDate.setTime( dueDate.getTime() + dueDate.getTimezoneOffset()*60*1000 );
      dueDate = dueDate.format('mm/dd/yyyy');
      //newList += '<li data-id="' + todos[item].id + '" class="todo-item"><span class="todo-item__date-created"><span class="label__created">Created</span>"' + currentDate + '</span><span class="todo-item__date-due"><span class="label__due">Due</span>' + dueDate + '</span><span class="todo-item__text">' + todos[item].itemText + '</span><button class="todo-item__edit" type="button">Edit</button><button class="todo-item__remove" type="button">Remove</button></li>';

      newList += '<li data-id="' + todos[item].id + '" class="todo-item clearfix">';
        newList += '<span class="todo-item__date-created"><span class="label__created">Created</span>' + currentDate + '</span>';
        newList += '<span class="todo-item__date-due"><span class="label__due">Due</span>' + dueDate + '</span>';
        newList += '<span class="todo-item__text"><span class="label__task">Task</span>' + todos[item].itemText + '</span>';
        newList += '<div class="todo-item__controls">';
          newList += '<button class="todo-item__edit" type="button">Edit</button>';
          newList += '<button class="todo-item__remove" type="button">Remove</button>';
        newList += '</div>';
      newList += '</li>';

    }
    todoList.innerHTML = newList;
  }
  updateList();

  addTodo.onsubmit = function(e) {

    e.preventDefault();

    var editedTodoIndex;

    for (var item in todos) {
      if (addTodoForm.todoId.value == todos[item].id) {
        editedTodoIndex = item;
        console.log(editedTodoIndex);
      }
    }

    if (editedTodoIndex >= 0) {

      var editedCreatedDate = new Date(addTodoForm.dateCreated.value);
      console.log(editedCreatedDate);
      editedCreatedDate = editedCreatedDate.toLocaleDateString('en-GB').split(' ')[0].split('/').reverse().join('-');

      var editedDueDate = new Date(addTodoForm.dateDue.value);
      console.log(editedDueDate);
      editedDueDate = editedDueDate.toLocaleDateString('en-GB').split(' ')[0].split('/').reverse().join('-');

      todos[editedTodoIndex] = {
        id: addTodoForm.todoId.value,
        todoCreated: editedCreatedDate,
        todoDue: editedDueDate,
        itemText: addTodoForm.todoTask.value
      }

    } else {
      var itemText = document.getElementById('itemText').value;
      var date = new Date();

      var todoItem = {
        id: (Math.random() * 100) + date.getUTCMilliseconds(),
        todoCreated: new Date(),
        todoDue: new Date(dateDue.value),
        itemText: itemText
      }

      todos.push(todoItem);
    }

    updateList();
    resetForm();

    return false;
  }

  function editTodo(idToEdit) {
    for (var item in todos) {
      if (todos[item].id == idToEdit) {
        var editingDateDue = new Date( todos[item].todoDue );
        editingDateDue = editingDateDue.toLocaleDateString('en-GB').split(' ')[0].split('/').reverse().join('-');
        addTodoForm.dateDue.value = editingDateDue;

        var editingDateCreated = new Date( todos[item].todoCreated );
        editingDateCreated = editingDateCreated.toLocaleDateString('en-GB').split(' ')[0].split('/').reverse().join('-');
        addTodoForm.dateCreated.value = editingDateCreated;

        addTodoForm.todoId.value = todos[item].id;
        console.log(addTodoForm.todoId.value);
        console.log(todos[item].id);
        addTodoForm.todoTask.value = todos[item].itemText;
      }
    }
  }

  function removeTodo(idToDelete) {
    for (var item in todos) {
      if (todos[item].id == idToDelete) {
        todos.splice(item, 1);
        updateList();
      }
    }
  }

  document.documentElement.addEventListener('click', function(e) {
    if (e.target.parentElement.parentElement && e.target.parentElement.parentElement.hasAttribute('data-id')) {

        var targetId = e.target.parentElement.parentElement.getAttribute('data-id');
        var targetClasses = e.target.className.split(' ');
        if (targetId !== null && targetClasses.indexOf('todo-item__edit') !== -1) {
          editTodo(targetId);
        } else if (targetId !== null && targetClasses.indexOf('todo-item__remove') !== -1) {
          removeTodo(targetId);
        }

    } else {
      return;
    }
  });

}
