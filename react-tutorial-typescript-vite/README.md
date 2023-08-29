# React-Tutorial Components in Typescript using Vite
React-Tutorial components rewritten in Typescript. 

Shared as code demonstration and not ready for use on production. 
Not all components have been imported on the index page.
----

**To use Fetch functionality:**
- add `.env.development` to root folder with:

~~~
VITE_API_PATH="{your API path}"
VITE_API_USERS_LOCATION="{your API users location}"
VITE_API_CURRENCY_LOCATION="{Your API currency location}"
VITE_API_GRADES_LOCATION="{Your API grades location}"
~~~
- ensure the api is returning a .json object. Some might require returning an Object Array when mapping through contents.


uses node 16.14.2

# To install
~~~
run nvm use 16
run npm install
~~~

# To run
~~~
run npm run dev
~~~

# To close
~~~
ctrl + c
~~~


project is using vite with typescript support + SWC (Speedy Web Compiler)
runs on localhost:3000

--------------

`npm run dev` - will start the development server. It uses the development version of React.

`npm run build` - will build your application for deployment. It uses the production version of React.

`npm run lint` - will check your code quality for common mistakes and potential improvements.

