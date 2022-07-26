import React, { Component } from "react";
import Resume from "./Resume";
import axios from 'axios';
import { toast } from 'react-toastify';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { cvDataValidation } from "../../helpers/validation";

const BASE_URL = process.env.REACT_APP_API_URL;
const jwtToken = localStorage.getItem('token');

class TemplateData extends Component {
  constructor(props) {
    super(props);
    let employment = {
      jobTitles: {},
      emp: {},
      jobDesc: {},
      jobStartDate: {},
      jobEndDate: {},
    };
    let education = {
      qual: {},
      edu: {},
      eduDesc: {},
      eduStartDate: {},
      eduEndDate: {},
    };
    let project = {
      projectTitles: {},
      projectDesc: {},
      projectStartDate: {},
      projectEndDate: {},
    };

    let personalData = {
      name: "",
      phone: "",
      email: "",
      location: ""
    };

    const templateType = this.props.match.params.template;

    this.state = {
      data: personalData,
      type: templateType ? templateType : 'two-column',
      headerColor: "#7F1D1D",
      headerTextColor: "#ffffff",
      empTemplate: [],
      eduTemplate: [],
      projectTemplate: [],
      empCount: 0,
      eduCount: 0,
      projectCount: 0,
      employment: employment,
      education: education,
      project: project,
      cvId: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEmpClick = this.handleEmpClick.bind(this);
    this.handleProjectClick = this.handleProjectClick.bind(this);
    this.handleEduClick = this.handleEduClick.bind(this);
  }

  componentDidMount = () => {
    if(this.props.match.url.includes("edit")){
      console.log(">>>>>>>>>>>>>", this.props.match.params);
      axios.get(`${BASE_URL}/user/get-cv/`+this.props.match.params.cv_id, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': jwtToken
          }
      })
      .then((data) => {
        if(data.data.status === 200){
          console.log(data.data.cvData); 
          this.setState({
            data: data.data.cvData.personalDetails,
            type: data.data.cvData.templateType,
            headerColor: "#7F1D1D",
            headerTextColor: "#ffffff",
            empTemplate: [],
            eduTemplate: [],
            projectTemplate: [],
            empCount: data.data.cvData.employementCount,
            eduCount: data.data.cvData.educationalCount,
            projectCount: data.dataprojectCount,
            employment: data.data.cvData.employementDetails,
            education: data.data.cvData.educationalDetails,
            project: data.data.cvData.projectDetails,
            cvId: data.data.cvData._id,
          }, () => {
            console.log(this.state);
          })
          // this.setState({cvId: data.data});
          toast.success("CV Data Saved Successfully", {
            className: "success-toast",
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT
        });
        }else{
          toast.error(data.data.message, {
              className: "error-toast",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000
          })
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }


  printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });
  }

  handleSaveCVData = async (e) => {
    e.preventDefault();
    const data = {
        personalDetails : this.state.data,
        educationalCount: this.state.eduCount,
        educationalDetails: this.state.education,
        educationTemplate: this.state.eduTemplate,
        projectCount: this.state.projectCount,
        projectDetails: this.state.project,
        projectTemplate: this.state.projectTemplate,
        employementCount: this.state.empCount,
        employementDetails: this.state.employment,
        employementTemplate: this.state.empTemplate,
        cvType: this.state.type
      }
      // validate
      const validate = cvDataValidation(data);
      if(!validate.isValid){
        toast.error(validate.message, {
            className: "error-toast",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000
        });
        return;
      }
      if(this.state.cvId){
        axios.post(`${BASE_URL}/user/save-cv/`+this.state.cvId, { ...data }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': jwtToken
            }
        })
        .then((data) => {
          if(data.data.status === 200){
            this.setState({cvId: data.data.cvId});
            toast.success("CV Data got Successfully", {
              className: "success-toast",
              autoClose: 3000,
              position: toast.POSITION.BOTTOM_RIGHT
          });
          }else{
            toast.error(data.data.message, {
                className: "error-toast",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            })
          }
        })
        .catch((err) => {
          console.log(err);
        })
      }else{
        axios.post(`${BASE_URL}/user/save-cv/`, { ...data }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': jwtToken
            }
        })
        .then((data) => {
          if(data.data.status === 200){
            this.setState({cvId: data.data.cvId});
            toast.success("CV Data Saved Successfully", {
              className: "success-toast",
              autoClose: 3000,
              position: toast.POSITION.BOTTOM_RIGHT
          });
          }else{
            toast.error(data.data.message, {
                className: "error-toast",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            })
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong", {
            className: "error-toast",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000
        })
        })
      }
    
  }

  paymentHandle = async (e) => {
    e.preventDefault();
    try{
      const cv_id = this.state.cvId;
      if(!cv_id){
        toast.error("First please save the CV", {
            className: "error-toast",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000
        })
      }
      const res = await axios.post(`${BASE_URL}/user/payment/`+cv_id, { payment:1 }, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': jwtToken
          }
      });
      
      this.printDocument();
      // window.open(res.data.location);
      // if(res.data?.location){
      //   window.location.href = res.data.location;
      // }else{
      //   throw new Error("Payment failed");  
      // }
    }catch(err){
      console.log(err);
      toast.error("Something went wrong", {
        className: "error-toast",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
    })
    }
  }

  handleEmpClick(e) {
    e.preventDefault();
    let i = this.state.empCount;
    ++i;
    const template = (
      <div className="col-md-12 p-2 m-2" key={`empKey${i}`}>
        <div className="col-md-12 flex-col justify-center items-center">
          <label className="p-2" htmlFor="startDate1">
            Start
          </label>
          <input
            className="col-md-12 pl-0.5 m-2 rounded"
            type="month"
            id={`jobStartDate${i}`}
            name={`jobStartDate${i}`}
            onChange={this.handleChange}
          />
          <label className="p-2" htmlFor="endDate1">
            End
          </label>
          <input
            className="col-md-12 pl-0.5 m-2 rounded"
            type="month"
            id={`jobEndDate${i}`}
            name={`jobEndDate${i}`}
            onChange={this.handleChange}
          />
        </div>
        <input
          className="col-md-12 p-2 m-2 rounded"
          type="text"
          id={`jobTitle${i}`}
          name={`jobTitle${i}`}
          placeholder="Job Title"
          onChange={this.handleChange}
        />
        <input
          className="col-md-12 p-2 m-2 rounded"
          type="text"
          id={`emp${i}`}
          name={`emp${i}`}
          placeholder="Employer"
          onChange={this.handleChange}
        />
        <textarea
          className="col-md-12 p-2 m-2 rounded"
          name={`jobDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={this.handleChange}
        />
      </div>
    );

    const empArray = this.state.empTemplate;
    empArray.push(template);
    this.setState({ empTemplate: empArray, empCount: i });
  }

  handleProjectClick(e) {
    e.preventDefault();
    let i = this.state.projectCount;
    ++i;
    const template = (
      <div className="col-md-12 p-2 m-2" key={`projKey${i}`}>
        <div className="col-md-6 flex-col justify-center items-center">
          <label className="p-2" htmlFor="startDate1">
            Start
          </label>
          <input
            className="col-md-6 pl-0.5 m-2 rounded"
            type="month"
            id={`projectStartDate${i}`}
            name={`projectStartDate${i}`}
            onChange={this.handleChange}
          />
          <label className="p-2" htmlFor="endDate1">
            End
          </label>
          <input
            className="col-md-12 pl-0.5 m-2 rounded"
            type="month"
            id={`projectEndDate${i}`}
            name={`projectEndDate${i}`}
            onChange={this.handleChange}
          />
        </div>
        <input
          className="col-md-12 p-2 m-2 rounded"
          type="text"
          id={`projectTitle${i}`}
          name={`projectTitle${i}`}
          placeholder="Project Title"
          onChange={this.handleChange}
        />
        <textarea
          className="col-md-12 p-2 m-2 rounded"
          name={`projectDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={this.handleChange}
        />
      </div>
    );

    const projectArray = this.state.projectTemplate;
    projectArray.push(template);
    this.setState({ projectTemplate: projectArray, projectCount: i });
  }

  handleEduClick(e) {
    e.preventDefault();
    let i = this.state.eduCount;
    ++i;
    const template = (
      <div className="col-md-12 p-2 m-2" key={`eduKey${i}`}>
        <div className="col-md-12 flex-col justify-center items-center">
          <label className="p-2" htmlFor="startDate1">
            Start
          </label>
          <input
            className="col-md-12 pl-0.5 m-2 rounded"
            type="month"
            id={`eduStartDate${i}`}
            name={`eduStartDate${i}`}
            onChange={this.handleChange}
          />
          <label className="p-2" htmlFor="endDate1">
            End
          </label>
          <input
            className="col-md-12 pl-0.5 m-2 rounded"
            type="month"
            id={`eduEndDate${i}`}
            name={`eduEndDate${i}`}
            onChange={this.handleChange}
          />
        </div>
        <input
          className="col-md-12 p-2 m-2 rounded"
          type="text"
          id={`qual${i}`}
          name={`qual${i}`}
          placeholder="Qualification"
          onChange={this.handleChange}
        />
        <input
          className="col-md-12 p-2 m-2 rounded"
          type="text"
          id={`educ${i}`}
          name={`educ${i}`}
          placeholder="School/College"
          onChange={this.handleChange}
        />
        <textarea
          className="col-md-12 p-2 m-2 rounded"
          name={`eduDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={this.handleChange}
        />
      </div>
    );

    const eduArray = this.state.eduTemplate;
    eduArray.push(template);
    this.setState({ eduTemplate: eduArray, eduCount: i });
  }

  handleChange(e) {
    const userData = this.state.data;
    const empData = this.state.employment;
    const eduData = this.state.education;
    const projectData = this.state.project;

    if (e.target.name === "templates") {
      this.setState({ type: e.target.value });
      e.target.value === "minimalist"
        ? this.setState({ headerColor: "#F3F4F6", headerTextColor: "#1F2937" })
        : this.setState({ headerColor: "#7F1D1D", headerTextColor: "#ffffff" });
    } else if (e.target.name === "headerColor") {
      this.setState({ headerColor: e.target.value });
    } else if (e.target.name === "headerTextColor") {
      this.setState({ headerTextColor: e.target.value });
    } else if (e.target.name.includes("jobTitle")) {
      empData["jobTitles"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("emp")) {
      empData["emp"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("jobDesc")) {
      empData["jobDesc"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("jobStartDate")) {
      empData["jobStartDate"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("jobEndDate")) {
      empData["jobEndDate"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("qual")) {
      eduData["qual"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("educ")) {
      eduData["edu"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("eduDesc")) {
      eduData["eduDesc"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("eduStartDate")) {
      eduData["eduStartDate"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("eduEndDate")) {
      eduData["eduEndDate"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectTitle")) {
      projectData["projectTitles"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectDesc")) {
      projectData["projectDesc"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectStartDate")) {
      projectData["projectStartDate"][`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectEndDate")) {
      projectData["projectEndDate"][`${e.target.name}`] = e.target.value;
    } else {
      userData[`${e.target.name}`] = e.target.value;
    }
    this.setState({
      data: userData,
      employment: empData,
      education: eduData,
      project: projectData,
    });
  }

  render() {
    return (
      <div className="row mt-4 mb-4">
        <div className="container-fluid mb-5 pb-4">
          <div className="col-md-12 d-flex">
            <div className="col-md-4 bg-white mr-2">
              <div className="container d-flex p-2">
                <button className=" d-flex p-2 btn btn-sm btn-success" onClick={this.paymentHandle}> Download </button>
                <button className=" d-flex p-2 btn btn-sm btn-primary" onClick={this.handleSaveCVData}> save </button>
              </div>
              <form className="w-2/5 flex flex-col justify-evenly print:hidden">
                <h3 className="col-md-12 m-2 text-xl">Template Type</h3>
                <select
                  className="col-md-12 p-2 m-2 rounded"
                  name="templates"
                  id="templates"
                  onChange={this.handleChange}
                  value={this.state.type}
                >
                  <option value="two-column">Two-Column</option>
                  <option value="minimalist">Minimalist</option>
                </select>
                <div className="col-md-12">
                  <label className="m-2 text-xl block" htmlFor="header">
                    Header Color
                  </label>
                  <input
                    className="mx-2 border-2 border-white rounded"
                    type="color"
                    id="headerColor"
                    name="headerColor"
                    onChange={this.handleChange}
                    value={this.state.headerColor}
                  />
                </div>
                <div className="col-md-12">
                  <label className="m-2 text-xl block" htmlFor="header">
                    Header-Text Color
                  </label>
                  <input
                    className="mx-2 border-2 border-white rounded"
                    type="color"
                    id="headerTextColor"
                    name="headerTextColor"
                    onChange={this.handleChange}
                    value={this.state.headerTextColor}
                  />
                </div>
                <h3 className="col-md-12 m-2 text-xl">Personal Details</h3>
                <input
                  className="col-md-12 p-2 m-2 rounded"
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.data.name}
                  onChange={this.handleChange}
                  placeholder="Name"
                />
                <input
                  className="col-md-12 p-2 m-2 rounded"
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.data.email}
                  onChange={this.handleChange}
                  placeholder="E-mail ID"
                />
                <input
                  className="col-md-12 p-2 m-2 rounded"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={this.state.data.phone}
                  onChange={this.handleChange}
                  placeholder="Phone"
                />
                <input
                  className="col-md-12 p-2 m-2 rounded"
                  type="text"
                  id="location"
                  name="location"
                  value={this.state.data.location}
                  onChange={this.handleChange}
                  placeholder="City, Country"
                />
                <h3 className="col-md-12 m-2 text-xl">Professional Details</h3>
                <input
                  className="col-md-12 p-2 m-2 rounded"
                  type="text"
                  id="wantedJobTitle"
                  name="wantedJobTitle"
                  value={this.state.data.wantedJobTitle}
                  onChange={this.handleChange}
                  placeholder="Wanted Job Title"
                />
                <textarea
                  className="col-md-12 p-2 m-2 rounded"
                  name="summary"
                  placeholder="Professional Summary"
                  rows="5"
                  cols="15"
                  value={this.state.data.summary}
                  onChange={this.handleChange}
                />
                <input
                  className="col-md-12 p-2 m-2 rounded"
                  type="text"
                  id="skills"
                  name="skills"
                  value={this.state.data.skills}
                  onChange={this.handleChange}
                  placeholder="Skills"
                />
                <div className="col-md-12">
                  <h3 className=" m-2 text-xl">Experience</h3>
                  {this.state.empTemplate.map((el) => el)}
                  <button
                    className="btn btn-primary"
                    onClick={this.handleEmpClick}
                  >
                    Add Employment
                  </button>
                </div>
                <div className="col-md-12">
                  <h3 className=" m-2 text-xl">Projects</h3>
                  {this.state.projectTemplate.map((el) => el)}
                  <button
                    className="btn btn-primary"
                    onClick={this.handleProjectClick}
                  >
                    Add Project
                  </button>
                </div>
              
                <div className="col-md-12">
                  <h3 className="col-md-12 m-2 text-xl">Educational Background</h3>
                  {this.state.eduTemplate.map((el) => el)}
                  <button
                    className="btn btn-primary"
                    onClick={this.handleEduClick}
                  >
                    Add Education
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <Resume
                userData={this.state.data}
                empData={this.state.employment}
                empCount={this.state.empCount}
                eduData={this.state.education}
                eduCount={this.state.eduCount}
                projectData={this.state.project}
                projectCount={this.state.projectCount}
                type={this.state.type}
                headerColor={this.state.headerColor}
                headerTextColor={this.state.headerTextColor}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateData;
