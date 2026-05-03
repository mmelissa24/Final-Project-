const commentForm = document.getElementById('commentForm')
const submitButton = document.getElementById('submitCommentButton');

if (commentForm && submitButton) {
    commentForm.addEventListener('submit', function() {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
    });
}