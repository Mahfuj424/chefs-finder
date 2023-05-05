import React from 'react';

import { jsPDF } from "jspdf";
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';
import Header from './Header';

const Blog = () => {
    const handleDownload = () => {
        const doc = new jsPDF();
        const blogContent = document.getElementById('blog-content').innerText;
        doc.text(blogContent, 20, 20);
        doc.save("blog.pdf");
        toast('Downloaded PDF')

    };
    return (
        <div>
            <div className='md:w-[80%] mx-auto'>
                <Header></Header>
                <div className="text-center mt-12">
                    <button className='btn btn-success hover:bg-purple-400 text-white ' onClick={handleDownload}>Download PDF</button>
                    <ToastContainer></ToastContainer>
                </div>
                <div id='blog-content'>
                    <div className='mt-12 shadow-2xl bg-cyan-200 hover:bg-gray-100 rounded-lg p-4 mb-12 space-y-3'>
                        <h1 className='text-xl font-semibold'>1. What is  differences between uncontrolled and controlled components?</h1>
                        <p className='p-3'>In React, components can be either controlled or uncontrolled depending on how they handle their data. Controlled components are those whose values are managed and controlled by React through a parent component's state. In contrast, uncontrolled components manage their own state internally and do not rely on the state of the parent component. Controlled components give developers more control over input data and make it easier to implement features like input validation, but they can be more complex to implement. Uncontrolled components, on the other hand, are simpler to implement but may be harder to validate and synchronize with other parts of the application. Ultimately, the choice between controlled and uncontrolled components depends on the specific use case and needs of the application.</p>
                    </div>
                    <div className='mt-20 shadow-2xl bg-cyan-200 hover:bg-gray-100 rounded-lg p-4 mb-12 space-y-3'>
                        <h1 className='text-xl font-semibold'>2. How to validate React props using PropTypes?</h1>
                        <p className='p-3'>To validate props in React, you can use the built-in feature called PropTypes. This helps ensure that the props passed to a component have the correct type and structure, which can prevent errors and improve the overall reliability of your code. To get started, you need to import the PropTypes library from the 'prop-types' package in your component. Then, define the propTypes as a static property within your component using the propTypes object. You can specify the type, whether it is required or not, and even nested object structures. By defining propTypes, you can validate that the props passed to a component are the correct type and structure. This can help catch errors early in the development process and improve the overall quality of your code. </p>
                    </div>
                    <div className='mt-20 shadow-2xl bg-cyan-200 hover:bg-gray-100 rounded-lg p-4 mb-12 space-y-3'>
                        <h1 className='text-xl font-semibold'>3. What is the difference between nodejs and express js?</h1>
                        <p className='p-3'>Node.js is a runtime environment for JavaScript that allows developers to execute JavaScript code outside of a web browser. It is used to build scalable, high-performance server-side applications. Node.js provides a number of built-in modules for tasks such as file system I/O, networking, and cryptography. Developers can use these modules to build custom server-side applications that can handle a large number of requests concurrently.
                            <br /> <br />
                            Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a number of additional features to simplify the process of building web applications, such as routing, middleware, and templating engines. Express.js is highly modular, allowing developers to add only the functionality they need. It is also widely used and has a large ecosystem of third-party packages, which makes it easier to build complex web applications.
                            <br /> <br />
                            In summary, Node.js provides the runtime environment for executing JavaScript code on the server, while Express.js is a web application framework built on top of Node.js that provides additional features and simplifies the process of building web applications. Developers can use Node.js to build custom server-side applications, while Express.js provides a set of tools and features to make the process of building web applications easier and more efficient.</p>
                    </div>
                    <div className='mt-20 shadow-2xl bg-cyan-200 hover:bg-gray-100 rounded-lg p-4 mb-12 space-y-3'>
                        <h1 className='text-xl font-semibold'>4. What is a custom hook, and why will you create a custom hook  ?</h1>
                        <p className='p-3'>In React, a custom hook is a reusable function that contains a set of logic and state that can be shared across multiple components. Custom hooks are used to abstract and reuse complex logic that might otherwise clutter the component code and make it harder to read and maintain.
                            <br /> <br />
                            Developers create custom hooks to promote code reuse and modularization. When a piece of functionality is shared between multiple components, it can be extracted into a custom hook. This makes the code more concise and easier to maintain. Custom hooks can also be used to encapsulate and manage state, making it easier to reason about the behavior of the component.
                            <br /> <br />
                            A custom hook is created by defining a function that uses one or more of the built-in hooks provided by React. By convention, custom hooks start with the word use and can accept input parameters just like any other function. The function then returns an object that contains the necessary state and any functions needed to update that state.
                            <br /> <br />
                            Some common use cases for custom hooks include managing form state, handling network requests, and handling animations. By creating custom hooks, developers can create more reusable and maintainable code, while also reducing the complexity of their components.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;