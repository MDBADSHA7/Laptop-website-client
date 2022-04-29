import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h2 className='blogs-Ques'>Ques-1: What is difference between Javascript and nodejs ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node. js is a server-side scripting language based on the Google Chrome V8 engine, Javascript can only be run in the browsers but We can run Javascript outside the browser with the help of NodeJS, Some of the javascript frameworks are RamdaJS, TypedJS, etc,
                but Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm, Javascript is used in frontend development but Nodejs is used in server-side development, It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++ but Nodejs is written in C, C++ and Javascript.
            </h2>
            <h2 className='blogs-Ques'>Ques-2: When should we use nodejs and mongodb ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind and we should use mongodb when we have to need store data objects as separate documents inside a collection instade of storing the data into the columns and rows of a traditional relational database.</h2>
            <h2 className='blogs-Ques'>Ques-3 : What is difference between SQL and NoSQL ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> There are some difference between sql and nosql such as: SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) but NoSQL is Non-relational or distributed database system, SQL  databases have fixed or static or predefined schema but NoSQL have dynamic schema, SQL  databases are not suited for hierarchical data storage but NoSQL databases are best suited for hierarchical data storage,SQL databases are best suited for complex queries but NoSQL databases are not so good for complex queries, SQL vertically Scalable but NoSQL horizontally scalable and SQL follows ACID property but NoSQL follows CAP(consistency, availability, partition tolerance)</h2>
            <h2 className='blogs-Ques'>Ques-4 : What is the purpose of JWT and how does it work ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> The purpose of JWT (JSON Web Token) is an open standard used to share security information between two parties  one is a client and another is a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                <br />
                The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
            </h2>
        </div>
    );
};

export default Blogs;