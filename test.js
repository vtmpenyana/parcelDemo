const Twit = require('twit')
 
const T = new Twit({
})



T.get('search/tweets', { q: 'mabanana since:2011-07-11', count: 100 }, function(err, data, response) {
    console.log(data)
  })

