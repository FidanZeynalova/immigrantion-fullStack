import React from 'react'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useGetImigrantsQuery, usePostImigrantMutation } from '../App/slices/ImigrantSlice';

let schema = yup.object().shape({
    img: yup.string().required(),
    country: yup.string().required(),
    title: yup.string().required(),
    desc: yup.string().required(),
});

function Add() {
    let { refetch } = useGetImigrantsQuery()
    let [postImigrant] = usePostImigrantMutation()
    return (
        <div className='Add'>
            <Formik
                initialValues={{ img: '', country: '', desc: '', title: "" }}
                validationSchema={schema}
                onSubmit={async (values) => {
                    await postImigrant(values)
                    refetch()
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="img" placeholder="Enter Image" />
                        <ErrorMessage name="img" component="div" />

                        <Field type="text" name="country" placeholder="Enter Country" />
                        <ErrorMessage name="country" component="div" />

                        <Field type="text" name="desc" placeholder="Enter Description" />
                        <ErrorMessage name="desc" component="div" />

                        <Field type="text" name="title" placeholder="Enter Title" />
                        <ErrorMessage name="title" component="div" />

                        <button type="submit" disabled={isSubmitting}> Submit </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Add
