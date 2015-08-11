var subjects = {
  topics: [],
  name: 'Awesome List of Cool Stuff',
  description: 'This object holds our various topics.',
  addTopic: function(topic) {
    this.topics.push(topic);
    this.listTopics();
  },
  removeTopic: function(topic) {
    var topicsIndex = this.topics.indexOf(topic);
    this.topics.splice(topicsIndex, 1);
    this.listTopics();
  },
  listTopics: function() {
    console.log('Our subjects object now contains the following topics:');
    for (topic in this.topics) {
      console.log('Topic #' + (parseInt(topic)+1) + ': ' + this.topics[topic]);
    }
    return this.topics;
  },
  toString: function() {
    return 'This subject is ' + this.name + ' and it is about ' + this.description + '.';
  }
}

var addTopicsForm = document.getElementById('addTopic');
var newTopicInput = document.getElementById('newTopic');
var topicsList = document.getElementById('topicsList');

addTopicsForm.onsubmit = function() {
  var newTopic = newTopicInput.value;

  if (newTopic && newTopic !== "") {
    subjects.addTopic(newTopic);
    updateTopicsList(subjects.topics);
    newTopicInput.value = "";
  }

  return false;
}

document.body.addEventListener('click', function(e) {
  var targetTopic = e.target.getAttribute('data-topic');
  if (subjects.topics.indexOf(targetTopic) !== -1) {
    subjects.removeTopic(targetTopic);
    updateTopicsList(subjects.topics);
  }
});

function updateTopicsList(topics) {
  topicsList.innerHTML = "";

  var topicsItems = "";

  for (var topic in topics) {
    topicsItems += '<li>' + topics[topic].toString() + '<button type="button" data-topic="' + topics[topic] + '"">Remove</button></li>';
  }

  topicsList.innerHTML = topicsItems;
}
