const express = require('express');

const app = express()
const hbs = require('hbs')
const path = require("path");
const createError = require("http-errors");
const port = process.env.PORT || 5656

// ROUTERS
const pageRouter = require('./routes/pageRouter')

app.listen(port, () => {
    console.log(`Connected to http://localhost:${port}`)
})

// View engine 

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));


// HBS Block Helpers --> for custom iterations 
// .fn makes it to work as a normal handlebars template 
// .inverse for else blocks

hbs.registerHelper("ifeq", function (a, b, options) {
    if (a === b) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

// ROUTES
app.use("/", pageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });
  
// error handler
  app.use(function (err, req, res, next) {
// set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
// render the error page
    res.status(err.status || 500);
    res.render("error");
  });
  
module.exports = app;