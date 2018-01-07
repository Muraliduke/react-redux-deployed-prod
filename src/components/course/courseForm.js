import React, {PropTypes} from "react";
import {Link} from "react-router";
// import TextInput from "../common/TextInput";
// import SelectInput from "../common/SelectInput";




const CourseForm = ({course,allAuthors,onSave,onChange,loading,errors}) =>{

    return(
        <form>
            <h1>Mange Course</h1>

            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>

            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                onChange={onChange}
                defaultOption="Select Author"
                options={allAuthors}
                error={errors.authorId}/>

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}/>

            <TextInput
                name="length"
                label="Lenght"
                value={course.length}
                onChange={onChange}
                error={errors.length}/>

        </form>
      
    );
};

CourseForm.propTypes={
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object.isRequired
};

export default CourseForm;