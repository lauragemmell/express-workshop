# Step 9 - Displaying your blog posts

So now we're saving the blog posts to the server.  Time to get them and display them on the page!

If you look inside `public/script.js`, there's a whole bunch of JavaScript code in there.  Don't worry about what all the code means, just know that it's responsible for sending a request to GET old blog posts and display them on the page underneath "Recent Posts".

`script.js` is trying to load existing posts by making a GET request. Look inside `script.js` and see if you can find any useful endpoints.


Your `script.js` file will want to receive the JSON containing your blog posts.  Your job is to make that happen!

### Things to remember
* `fs.writeFile()` normally overwrites the target file you've given it.  Chances are you don't want to lose all your old blog posts every time you get a new one, so think about how you can combine `fs.readFile()` and `fs.writeFile()` to prevent overwriting.

* You will need to convert between JSON and a JavaScript object several times.  `JSON.parse()` and `JSON.stringify()` are what you need.

If all goes well, you should have a fully functional CMS!

## Congratulations!! 😍

## [**Want more? <br> Try out some stretch goals >>>**](stretch-goals.md)
