import { useState, useEffect, Fragment } from "react";
import {useHistory} from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap";
import {FaPhoneSquareAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md"
import axios from "axios";

const ResumeComponent = ({ match }) => {
  const history = useHistory();
  const [userResumeData, setUserResumeData] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      await axios
        .get(`/api/${match.params.id}`)
        .then((res) => {
          if (res.data.success) {
            setMounted(true);
            setUserResumeData(res.data.resumeData);
          }
        });
    };
    fetchedData(); //Calling
  }, [match.params.id]);

  
  const onResumeDownload = (e) => {
    window.print() //print
  };

  return (
    <Fragment>
      {mounted ? (
        <Container className="mt-2 mb-2">
          <main className="resume-section pl-4">
            <header>
              <Row className="border-bottom border-dark w-100">
                <Col sm={12} md={6} className="py-4 px-4">
                  <h6 className="text-dark font-weight-bold">
                    {userResumeData.userFirstName}
                    {userResumeData.userSecondName}
                  </h6>
                 
                  <div >
                    <p  className="text-dark"><MdEmail /> 
                    &nbsp;{userResumeData.userEmail}</p> 
                  </div>
                  <div>
                   <p  className="text-dark"><FaPhoneSquareAlt />
                    &nbsp;{userResumeData.userPhoneNumber}
                    </p>
                    </div>
                </Col>
              </Row>
            </header>

 {/* Objective Section  */}           
            <Row className="border-bottom border-dark w-100">
              <h3 className="text-left text-dark w-100 pt-4 font-weight-bold">
                CARRER OBJECTIVE
              </h3>
              <Col sm={12}  className="my-6">
                <ul>
                <li className="d-flex align-items justify-content-start">
                    <p className="px-2">{userResumeData.userProfileDescription}</p>
                  </li>
                </ul>
              </Col>
            </Row>

{/* Experience Section  */}            
            <Row className="border-bottom border-dark w-100">
            {
              userResumeData.user1stCompanyName ? (
                <h3 className="text-left text-dark w-100 pt-4 font-weight-bold">
                PROFESSIONAL EXPERIENCE
              </h3>
              ) : null
            }
              
              <Col className="py-4">
                <ul>
                  <li>
            {
              userResumeData.user1stCompanyName ? (
                <h4 className="text-dark font-weight-bold">
                <b>1.Company Name: </b> {userResumeData.user1stCompanyName} 
              </h4>
              ) : null
            }

            {
              userResumeData.user1stExperience ? (
                <h6 className="text-dark font-weight-bold">
                     <b> Role:</b> {userResumeData.user1stExperience} 
                    </h6>
              ): null
            }

            {
              userResumeData.user1stExperienceStartingDate,userResumeData.user1stExperienceEndingDate ? (
                <p className="text-dark font-weight-bold">
                     <strong> Duration:  </strong> {userResumeData.user1stExperienceStartingDate} to &nbsp;
                    {userResumeData.user1stExperienceEndingDate}
                   
                  </p>
              ): null
            }

            {
              userResumeData.user1stCompanyExperience ? (
                <p className="text-dark font-weight-normal">
                     <b> Key responsibilities : </b> {userResumeData.user1stCompanyExperience} 
                    </p>
              ): null
            }

            {
              userResumeData.userKey ? (
                <p className="text-dark font-weight-normal">
                     <b>Work Highlights: </b> {userResumeData.userKey} 
                    </p>
              ): null
            }      
          </li>
            <li>

            {
                    userResumeData.user2ndExperience ? (<h4 className="text-dark font-weight-bold">
                     <b>2. Company Name: </b>{userResumeData.user2ndExperience}
                    </h4>
                      ) : null
                  }  

                  {
                    userResumeData.user2ndCompanyName ? (
                      <h6 className="text-dark font-weight-bold">
                    <b> Role:</b> {userResumeData.user2ndCompanyName}
                    </h6>
                    ): null
                  } 
                  {
                   userResumeData.user2ndExperienceStartingDate,userResumeData.user2ndExperienceEndingDate ? (
                      <p className="text-dark font-weight-bold">
                    <strong> Duration:  </strong>
                      {userResumeData.user2ndExperienceStartingDate} to &nbsp;
                      {userResumeData.user2ndExperienceEndingDate}
                    </p>
                    ): null
                  }  

                  {
                    userResumeData.user2ndCompanyExperience ? (
                      <p className="text-dark font-weight-normal">
                    <b> Key responsibilities : </b> {userResumeData.user2ndCompanyExperience}
                    </p>
                    ): null
                  }  

                  {
                    userResumeData.userkeyOne ? (
                    <p className="text-dark font-weight-normal">
                    <b>Work Highlights: </b> {userResumeData.userkeyOne}
                    </p>
                    ) : null
                  } 
                </li>
                </ul>
                
              </Col>
            </Row>           

{/* Education Section  */}

  <Row className="border-bottom border-dark w-100">
              <h3 className="text-left text-dark w-100 pt-4 font-weight-bold">
                EDUCATION DETAILS
              </h3>
              <Col className="py-4">
                <ul>
                  <li>
                    <h5 className="text-dark font-weight-bold">
                      {userResumeData.userCollegeDegreeName}
                    </h5>
                    <h6 className="text-dark">
                     <b>College Name:</b> {userResumeData.userCollegeName}
                    </h6>
                    <p className="text-dark">
                      <b>Year of Passed-Out: </b>{userResumeData.userCollegeStartingDate} <br/>
                      <b> Perctange :</b> {userResumeData.userPercentageTwo}
                       </p>
                    {/* <p className= "text-dark font-weight-normal">
                     <strong> Perctange : {userResumeData.userPercentageTwo} </strong>
                    </p> */}
                  </li>

                  <li>
                    <h5 className="text-dark font-weight-bold">
                      {userResumeData.userHighSchoolDegreeName}
                    </h5>
                    <h6 className="text-dark">
                      <b>School Name:</b> {userResumeData.userHighSchoolName}
                    </h6>
                    <p className="text-dark">
                    <b>Year of Passed-Out:</b> {userResumeData.userHighSchoolStartingDate} <br/>
                    <b>Perctange : </b>{userResumeData.userPercentage}
                    </p>
                      {/* <p className= "text-dark font-weight-normal">
                     <strong> Perctange : {userResumeData.userPercentage} </strong>
                    </p> */}
                  </li>
                  <li>
                    <h5 className="text-dark font-weight-bold">
                      {userResumeData.userUniversityName}
                    </h5>
                    <h6 className="text-dark">
                     <b>School Name:</b> {userResumeData.userUniversityName}
                    </h6>
                    <p className="text-dark">
                    <b>Year of Passed-Out:</b> {userResumeData.userHighSchoolStartingDate}<br/>
                    <b>Perctange : </b>{userResumeData.userPercentageOne}
                    </p>
                    {/* <p className= "text-dark font-weight-normal">
                     <strong> Perctange : {userResumeData.userPercentageOne} </strong>
                    </p> */}
                  </li>
                </ul>
              </Col>
            </Row>
            
            
{/* Project Work */}

  <Row className="border-bottom border-dark w-100">
            {
              userResumeData.userProjectTitle ? (
                <h3 className="text-left text-dark w-100 pt-4 font-weight-bold">
                Project Work
              </h3>
              ) : null
            }
              
              <Col className="py-4">
                <ul>
                  <li>
            {
              userResumeData.userProjectTitle ? (
                <h6 className="text-dark font-weight-bold">
                <b>Title: </b> {userResumeData.userProjectTitle} 
              </h6>
              ) : null
            }

            {
              userResumeData.userProjectRole ? (
                <h6 className="text-dark">
                     <b>Role: </b>{userResumeData.userProjectRole} 
                </h6>
              ): null
            }

            {
              userResumeData.userProjectDuration ? (
                <p className="text-dark">
                     <strong> Duration: </strong> {userResumeData.userProjectDuration}
                </p>
              ): null
            }

            {
              userResumeData.userProjectDescription ? (
                <p className="text-dark">
                     <b>Description : </b> {userResumeData.userProjectDescription} 
                    </p>
              ): null
            }

                  
          </li>
     </ul>
 </Col>
</Row> 

 {/* Skills Section  */}
          <Row className="border-bottom border-dark w-100">
              <h3 className="text-left text-dark w-100 pt-4 font-weight-bold"> TECHNICAL SKILLS </h3>
              <p>{userResumeData.userSkills}</p>
          </Row>

{/* Personal Details Section  */}    

            <Row className="border-bottom border-dark w-100">
              <h3 className="text-left text-dark w-100 pt-4 font-weight-bold">
                PERSONAL DETAILS
              </h3>
              <Col sm={12} md={6} className="my-4">
                <ul>
                <li className="d-flex align-items justify-content-start">
                  <p className="px-2"> <b>House Address:</b> {userResumeData.userHouseAddress}</p>
                 </li>

                <li className="d-flex align-items justify-content-start">
                   <p className="px-2"><b>Date of Birth:</b> {userResumeData.userDob}</p>
                </li>

                  <li className="d-flex align-items justify-content-start">
                      <p className="px-2"><b>Gender:</b> {userResumeData.userGender}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                      <p className="px-2"><b> Nationality: </b> {userResumeData.userNationality}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                      <p className="px-2"><b>Martial Status:</b> {userResumeData.userMaritial}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <p className="px-2"><b>Hobbies:</b> {userResumeData.userHobbies}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <p className="px-2"><b>Languages Known: </b> {userResumeData.userLanguages}</p>
                  </li>
                </ul>
              </Col>
            </Row>

{/* Declaration Section */}
            <Row>
              <h3 className= "text-left text-dark w-100 pt-4 font-weight-bold"> DECLARATION</h3>
              <Col sm={12}  className="my-6">
                <ul>
                <li className="d-flex align-items justify-content-start">
                    <p className="px-2">{userResumeData.userDeclaration}</p>
                </li>
                <li className="text-left text-dark w-100 pt-2">
                <p><b>Place :</b> {userResumeData.userLocation}</p> 
                <p><b>Signature: </b>{userResumeData.userFirstName}
                    {userResumeData.userSecondName}</p>
                </li>
                  
                </ul>
              </Col>
            </Row>
          </main>
          <br/>
          <div className='button-container'>
          <Button
             className='btn btn-secondary'
             buttonStyle='btn--outline'
             buttonSize='btn--large'
            onClick={onResumeDownload}
          >
            Print
          </Button>
          </div>
          {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button onClick={onResumeDownload}>Print</button>
      </div> */}
        </Container>
      ) : (
        "Loading....."
      )}
    </Fragment>
  );
};

export default ResumeComponent;
