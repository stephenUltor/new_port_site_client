import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Axios from "axios"


export default function CreatePost(props) {

    const initialValues = {
        title: "",
        username: "",
        postText: ""
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        username: Yup.string().min(5).max(30).required(),
        postText: Yup.string().required()
    })

    const onSubmit = (data) => {
        Axios.post("http://localhost:3001/posts", data).then((response) => {
            alert("Thank you for your Post!!")
            props.getPosts()
            props.handleCreatePostClick()
        })
    }

    return (
        <>

            <div className='create-post-container'>
                
                <p className='create-exit' onClick={props.handleCreatePostClick}>X</p>

                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>

                        <label >Title:</label>
                        <ErrorMessage name='title' component="span" />
                        <Field className="post-title" name="title" placeholder="Title" />

                        <label >Name:</label>
                        <ErrorMessage name='username' component="span" />
                        <Field className="post-username" name="username" placeholder='Name (Do not include "@")' />

                        <label >Message:</label>
                        <ErrorMessage name='message' component="span" />
                        <Field className="post-message" name="postText" placeholder="Message" as="textarea" />

                        <button type="submit" className="post-button">POST</button>

                    </Form>

                </Formik>

            </div>

        </>
    )
}