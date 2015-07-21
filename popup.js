// Saves options to chrome.storage
function save_options() {
  var girdi = document.getElementById('girdi').value;
  chrome.storage.sync.set({
    "girdiSayisi": girdi,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Ayarlar kaydedildi.';
    setTimeout(function() {
      status.textContent = '';
    }, 1500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value
  chrome.storage.sync.get({
    "girdiSayisi": "10",
  }, function(items) {
    document.getElementById('girdi').value = items.girdiSayisi;

  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);