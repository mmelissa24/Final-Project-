var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  try {
    req.db.query('SELECT * FROM todos;', (err, results) => {
      if (err) {
        console.error('Error fetching todos:', err);
        return res.status(500).send('Error fetching todos');
      }
      res.render('index', { title: 'My Simple TODO', todos: results });
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Error fetching items');
  }
});

router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Menu' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

router.get('/comments', function(req, res, next) {
  req.db.query('SELECT * FROM comments ORDER BY  created_at DESC LIMIT 10;',(err, results) => {
    if (err) {
      console.error('Error fetching comments:', err);
      return res.status(500).send('Unable to load comments right now.');
    }

    res.render('comments', {
      title: 'Customer Comments',
      comments: results
    });
  });
});

router.post('/comments', function(req, res, next) {
  const name = req.body.name.trim();
  const comment = req.body.comment.trim();

  if (!name || !comment) {
    return res.render('comments', {
      title: 'Customer Comments',
      comments:[],
      error: 'Please enter both your name and a comment.'
    });
  }

  if (name.length > 100) {
    return res.render('comments', {
      title: 'Customer Comments',
      comments: [],
      error: 'Name must be 100 characters or fewer.'
    });
  }

  if (comment.length > 500) {
    return res.render('comments', {
      title: 'Customer Comments',
      comments: [],
      error: 'Comment must be 500 characters or fewer.'
    });
  }
   req.db.query(
    'INSERT INTO comments (name, `comment`) VALUES (?, ?);',
    [name, comment],
    (err, results) => {
      if (err) {
        console.error('ERROR saving comment:', err);
        return res.status(500). send('Unable to save comment right now.');
      }
      res.redirect('/comments');
    }
   );
});

router.post('/create', function (req, res, next) {
    const { task } = req.body;
    try {
      req.db.query('INSERT INTO todos (task) VALUES (?);', [task], (err, results) => {
        if (err) {
          console.error('Error adding todo:', err);
          return res.status(500).send('Error adding todo');
        }
        console.log('Todo added successfully:', results);
        // Redirect to the home page after adding
        res.redirect('/');
      });
    } catch (error) {
      console.error('Error adding todo:', error);
      res.status(500).send('Error adding todo');
    }
});

router.post('/delete', function (req, res, next) {
    const { id } = req.body;
    try {
      req.db.query('DELETE FROM todos WHERE id = ?;', [id], (err, results) => {
        if (err) {
          console.error('Error deleting todo:', err);
          return res.status(500).send('Error deleting todo');
        }
        console.log('Todo deleted successfully:', results);
        // Redirect to the home page after deletion
        res.redirect('/');
    });
    }catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).send('Error deleting todo:');
    }
});

module.exports = router;