import {
  Container,
  Form,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./FormComponent.css"
import axios from "axios";

const FormComponent = ({ history }) => {

  // first name of the person
  const [userFirstName, setUserFirstName] = useState("");
  const handleFirstName = (e) => {
    e.preventDefault ();
    setUserFirstName(e.target.value);
  };

  // second name of the person
  const [userSecondName, setUserSecondName] = useState("");
  const handleUserSecondName = (e) => {
    setUserSecondName(e.target.value);
  };

  // gender of user
  const [userGender, setUserGender] = useState("Male");
  const handleUserGender = (e) => {
    setUserGender(e.target.value);
  };

  // Date of Birthof the user
  const [userDob, setUserDob] = useState("");
  const handleUserDob = (e) => {
    setUserDob(e.target.value);
  };

  // user profession
  const [userProfession, setUserProfession] = useState("");
  const handleUserProfession = (e) => {
    setUserProfession(e.target.value);
  };

  // user location
  const [userLocation, setUserLocation] = useState("");
  const handleUserLocation = (e) => {
    setUserLocation(e.target.value);
  };
  
  // user phone number
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const handleUserPhoneNumber = (e) => {
    setUserPhoneNumber(e.target.value);
  };
  
  // user email address
  const [userEmail, setUserEmail] = useState("");
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  
  // user house address
  const [userHouseAddress, setUserHouseAddress] = useState("");
  const handleUserHouseAddress = (e) => {
    setUserHouseAddress(e.target.value);
  };

  // user Nationality
  const [userNationality, setUserNationality] = useState("");
  const handleUserNationality = (e) => {
    setUserNationality(e.target.value);
  };

  // user Maritial Status
  const [userMaritial, setUserMaritial] = useState("");
  const handleUserMaritial = (e) => {
    setUserMaritial(e.target.value);
  };

  // user Languaguages Known
  const [userLanguages, setUserLanguages] = useState("");
  const handleUserLanguages = (e) => {
    setUserLanguages(e.target.value);
  };

  // user Hobbies
  const [userHobbies, setUserHobbies] = useState("");
  const handleUserHobbies = (e) => {
    setUserHobbies(e.target.value);
  };

  // user objective
  const [userProfileDescription, setUserProfileDescription] = useState("");
  const handleUserProfileDescription = (e) => {
    setUserProfileDescription(e.target.value);
  };

  
  // user profile website
  const [userFirstProfileWebsite, SetUserFirstProfileWebsite] =
    useState("GitHub");
  const handleFirstUserProfileWebsite = (e) => {
    SetUserFirstProfileWebsite(e.target.value);
  };
  // user github profile
  const [userGitHubProfileName, SetUserGitHubProfileName] = useState("");
  const handleUserGitHubProfileName = (e) => {
    SetUserGitHubProfileName(e.target.value);
  };
  // user profile website
  const [userSecondProfileWebsite, SetUserSecondProfileWebsite] =
    useState("LinkedIn");
  const handleSecondUserProfileWebsite = (e) => {
    SetUserSecondProfileWebsite(e.target.value);
  };
  // user LinkedIn profile
  const [userLinkedInProfileName, SetUserLinkedInProfileName] = useState("");
  const handleUserLinkedInProfileName = (e) => {
    SetUserLinkedInProfileName(e.target.value);
  };
  // user profile website
  const [userThirdProfileWebsite, SetUserThirdProfileWebsite] =
    useState("Personal Website");
  const handleThirdUserProfileWebsite = (e) => {
    SetUserThirdProfileWebsite(e.target.value);
  };
  // user personal website link
  const [userPersonalWebsiteLink, setUserPersonalWebsiteLink] = useState("");
  const handleUserPersonalWebsiteLink = (e) => {
    setUserPersonalWebsiteLink(e.target.value);
  };
  // user high school degree name
  const [userHighSchoolDegreeName, setUserHighSchoolDegreeName] = useState("");
  const handleUserHighSchoolDegreeName = (e) => {
    setUserHighSchoolDegreeName(e.target.value);
  };
  // user high school name
  const [userHighSchoolName, setUserHighSchoolName] = useState("");
  const handleUserHighSchoolName = (e) => {
    setUserHighSchoolName(e.target.value);
  };
  // user high school degree starting date
  const [userHighSchoolStartingDate, setUserHighSchoolStartingDate] =
    useState("");
  const handleUserHighSchoolDegreeStartingDate = (e) => {
    setUserHighSchoolStartingDate(e.target.value);
    console.log(e.target.value);
  };
  // user high school degree ending date
  const [userHighSchoolEndingDate, setUserHighSchoolEndingDate] = useState("");
  const handleUserHighSchoolDegreeEndingDate = (e) => {
    setUserHighSchoolEndingDate(e.target.value);
  };
  // user high school experience
  const [userHighSchoolExperience, setUserHighSchoolExperience] = useState("");
  const handleUserHighSchoolExperience = (e) => {
    setUserHighSchoolExperience(e.target.value);
  };

  // user high school Percentage for 12th Standard
  const [userPercentage, setUserPercentage] = useState("");
  const handleUserPercentage = (e) => {
    setUserPercentage(e.target.value);
  };

  // user high school Percentage for 10th Standard
  const [userPercentageOne, setUserPercentageOne] = useState("");
  const handleUserPercentageOne = (e) => {
    setUserPercentageOne(e.target.value);
  };

  // user high school Percentage for College
  const [userPercentageTwo, setUserPercentageTwo] = useState("");
  const handleUserPercentageTwo = (e) => {
    setUserPercentageTwo(e.target.value);
  };


  // user college degree name handleUserPercentage
  const [userCollegeDegreeName, setUserCollegeDegreeName] = useState("");
  const handleUserCollegeDegreeName = (e) => {
    setUserCollegeDegreeName(e.target.value);
  };
  // user college name
  const [userCollegeName, setUserCollegeName] = useState("");
  const handleUserCollegeName = (e) => {
    setUserCollegeName(e.target.value);
  };
  // user college degree starting date
  const [userCollegeStartingDate, setUserCollegeStartingDate] = useState("");
  const handleUserCollegeStartingDate = (e) => {
    setUserCollegeStartingDate(e.target.value);
  };
  // user college degree ending date
  const [userCollegeEndingDate, setUserCollegeEndingDate] = useState("");
  const handleUserCollegeDegreeEndingDate = (e) => {
    setUserCollegeEndingDate(e.target.value);
  };
  // user college experience
  const [userCollegeExperience, setUserCollegeExperience] = useState("");
  const handleUserCollegeExperience = (e) => {
    setUserCollegeExperience(e.target.value);
  };
  // user bachelor degree name
  const [userBachelorDegreeName, setUserBachelorDegreeName] = useState("");
  const handleUserBachelorDegreeName = (e) => {
    setUserBachelorDegreeName(e.target.value);
  };
  // user university name
  const [userUniversityName, setUserUniversityName] = useState("");
  const handleUserUniversityName = (e) => {
    setUserUniversityName(e.target.value);
  };
  // user bachelor degree starting date
  const [userBachelorStartingDate, setUserBachelorStartingDate] = useState("");
  const handleUserBachelorStartingDate = (e) => {
    setUserBachelorStartingDate(e.target.value);
  };
  // user bachelor degree ending date
  const [userBachelorEndingDate, setUserBachelorEndingDate] = useState("");
  const handleUserBachelorDegreeEndingDate = (e) => {
    setUserBachelorEndingDate(e.target.value);
  };
  // user university experience
  const [userUniversityExperience, setUserUniversityExperience] = useState("");
  const handleUserUniversityExperience = (e) => {
    setUserUniversityExperience(e.target.value);
  };
  // user 1st experience
  const [user1stExperience, setUser1stExperience] = useState("");
  const handleUser1stExperience = (e) => {
    setUser1stExperience(e.target.value);
  };
  // user 1st company name
  const [user1stCompanyName, setUser1stCompanyName] = useState("");
  const handleUser1stCompanyName = (e) => {
    setUser1stCompanyName(e.target.value);
  };
  // user 1st experience starting date
  const [user1stExperienceStartingDate, setUser1stExperienceStartingDate] =
    useState("");
  const handleUser1stExperienceStartingDate = (e) => {
    setUser1stExperienceStartingDate(e.target.value);
  };
  // user 1st experience ending date
  const [user1stExperienceEndingDate, setUser1stExperienceEndingDate] =
    useState("");
  const handleUser1stExperienceEndingDate = (e) => {
    setUser1stExperienceEndingDate(e.target.value);
  };

   // user 1st company key Skills
   const [userKey, setUserKey] = useState("");
   const handleUserKey = (e) => {
    setUserKey(e.target.value);
   };

  // user 1st company experience
  const [user1stCompanyExperience, setUser1stCompanyExperience] = useState("");
  const handleUser1stCompanyExperience = (e) => {
    setUser1stCompanyExperience(e.target.value);
  };
  // user 2nd experience
  const [user2ndExperience, setUser2ndExperience] = useState("");
  const handleUser2ndExperience = (e) => {
    setUser2ndExperience(e.target.value);
  };
  // user 2nd company name
  const [user2ndCompanyName, setUser2ndCompanyName] = useState();
  const handleUser2ndCompanyName = (e) => {
    setUser2ndCompanyName(e.target.value);
  };
  // user 2nd experience starting date
  const [user2ndExperienceStartingDate, setUser2ndExperienceStartingDate] =
    useState("");
  const handleUser2ndExperienceStartingDate = (e) => {
    setUser2ndExperienceStartingDate(e.target.value);
  };
  // user 2nd experience ending date
  const [user2ndExperienceEndingDate, setUser2ndExperienceEndingDate] =
    useState("");
  const handleUser2ndExperienceEndingDate = (e) => {
    setUser2ndExperienceEndingDate(e.target.value);
  };
  // user 2nd company experience
  const [user2ndCompanyExperience, setUser2ndCompanyExperience] = useState("");
  const handleUser2ndCompanyExperience = (e) => {
    setUser2ndCompanyExperience(e.target.value);
  };

  // user 2nd company key Skills
  const [userKeyOne, setUserKeyOne] = useState("");
  const handleUserKeyOne = (e) => {
   setUserKeyOne(e.target.value);
  };


  // user 3rd experience
  const [user3rdExperience, setUser3rdExperience] = useState("");
  const handleUser3rdExperience = (e) => {
    setUser3rdExperience(e.target.value);
  };
  // user 3rd company name
  const [user3rdCompanyName, setUser3rdCompanyName] = useState();
  const handleUser3rdCompanyName = (e) => {
    setUser3rdCompanyName(e.target.value);
  };
  // user 3rd experience starting date
  const [user3rdExperienceStartingDate, setUser3rdExperienceStartingDate] =
    useState("");
  const handleUser3rdExperienceStartingDate = (e) => {
    setUser3rdExperienceStartingDate(e.target.value);
  };
  // user 3rd experience ending date
  const [user3rdExperienceEndingDate, setUser3rdExperienceEndingDate] =
    useState("");
  const handleUser3rdExperienceEndingDate = (e) => {
    setUser3rdExperienceEndingDate(e.target.value);
  };
  // user 3rd company experience
  const [user3rdCompanyExperience, setUser3rdCompanyExperience] = useState("");
  const handleUser3rdCompanyExperience = (e) => {
    setUser3rdCompanyExperience(e.target.value);
  };
  // user experiences
  const [userSkills, setUserSkills] = useState("");
  const handleUserSkills = (e) => {
    setUserSkills(e.target.value);
  };

  const [userDeclaration, setUserDeclaration] = useState("");
  const handleUserDeclaration = (e) => {
    setUserDeclaration(e.target.value);
  };

  //Project Work

  const [userProjectTitle, setUserProjectTitle] = useState("");
  const handleUserProjectTitle = (e) => {
    setUserProjectTitle(e.target.value);
  };

  const [userProjectDuration, setUserProjectDuration] = useState("");
  const handleUserProjectDuration = (e) => {
    setUserProjectDuration(e.target.value);
  };

  const [userProjectRole, setUserProjectRole] = useState("");
  const handleUserProjectRole = (e) => {
    setUserProjectRole(e.target.value);
  };
  
  const [userProjectDescription, setUserProjectDescription] = useState("");
  const handleUserProjectDescription = (e) => {
    setUserProjectDescription(e.target.value);
  };



  // sum up all the information into one object
  const handleUserResumeData = (e) => {
    e.preventDefault();
    axios
      .post("/api", {
        userFirstName,
        userSecondName,
        userGender,
        userDob,
        userProfession,
        userLocation,
        userPhoneNumber,
        userEmail,
        userNationality,
        userMaritial,
        userHobbies,
        userLanguages,
        userHouseAddress,
        userProfileDescription,
        userFirstProfileWebsite,
        userGitHubProfileName,
        userSecondProfileWebsite,
        userLinkedInProfileName,
        userThirdProfileWebsite,
        userPersonalWebsiteLink,
        userHighSchoolDegreeName,
        userHighSchoolName,
        userHighSchoolStartingDate,
        userHighSchoolEndingDate,
        userHighSchoolExperience,
        userPercentage,
        userPercentageOne,
        userPercentageTwo,
        userCollegeDegreeName,
        userCollegeName,
        userCollegeStartingDate,
        userCollegeEndingDate,
        userCollegeExperience,
        userBachelorDegreeName,
        userUniversityName,
        userBachelorStartingDate,
        userBachelorEndingDate,
        userUniversityExperience,
        userProjectTitle,
        userProjectDuration,
        userProjectRole,
        userProjectDescription,
        user1stExperience,
        user1stCompanyName,
        user1stExperienceStartingDate,
        user1stExperienceEndingDate,
        user1stCompanyExperience,
        userKey,
        user2ndExperience,
        user2ndCompanyName,
        user2ndExperienceStartingDate,
        user2ndExperienceEndingDate,
        user2ndCompanyExperience,
        userKeyOne,
        user3rdExperience,
        user3rdCompanyName,
        user3rdExperienceStartingDate,
        user3rdExperienceEndingDate,
        user3rdCompanyExperience,
        userSkills,
        userDeclaration
      })
      .then((res) => {
        if (res.data.success) {
          history.push(`/view_resume/${res.data.resumeData._id}`);
        }
      });
  };
  return (
    <Container className="mt-5 mb-2">
      <Form className="form-section">
        <h1 className="text-dark font-weight-bold py-3">Personal Details</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>First Name</FormLabel>
            <FormControl
              type="text"
              placeholder="First Name"
              onChange={handleFirstName}
              value={userFirstName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Last Name"
              onChange={handleUserSecondName}
              value={userSecondName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Gender</FormLabel>
            <FormControl
              as="select"
              onChange={handleUserGender}
              value={userGender}
              required
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
            </FormControl>
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Date of Birth</FormLabel>
            <FormControl
              type="text"
              onChange={handleUserDob}
              value={userDob}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Languages Known </FormLabel>
            <FormControl
              type="text"
              onChange={handleUserLanguages}
              value={userLanguages}
              required
            />
          </FormGroup>
          {/* <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Profession</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g Full stack developer"
              onChange={handleUserProfession}
              value={userProfession}
              required
            />
          </FormGroup> */}
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Location</FormLabel>
            <FormControl
              type="text"
              placeholder="Lahore, Pakistan"
              onChange={handleUserLocation}
              value={userLocation}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Mobile Phone </FormLabel>
            <FormControl
              type="number"
              placeholder="+01 23 456 789"
              onChange={handleUserPhoneNumber}
              value={userPhoneNumber}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Email </FormLabel>
            <FormControl
              type="email"
              placeholder="info@domain.com"
              onChange={handleUserEmail}
              value={userEmail}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> House Address </FormLabel>
            <FormControl
              type="text"
              placeholder="House#0 St#0 street and city name"
              onChange={handleUserHouseAddress}
              value={userHouseAddress}
              required
            />
          </FormGroup>

          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Nationality </FormLabel>
            <FormControl
              type="text"
              onChange={handleUserNationality}
              value={userNationality}
              required
            />
          </FormGroup>

          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Martial Status </FormLabel>
            <FormControl
              type="text"
              onChange={handleUserMaritial}
              value={userMaritial}
              required
            />
          </FormGroup>

          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Hobbies </FormLabel>
            <FormControl
              type="text"
              onChange={handleUserHobbies}
              value={userHobbies}
              required
            />
          </FormGroup>

          
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Describe Yourself</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUserProfileDescription}
              value={userProfileDescription}
              required
            />
          </FormGroup>
        </Form.Row>
        {/* <h1 className="text-dark font-weight-bold py-4">Social Detail</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleFirstUserProfileWebsite}
              value={userFirstProfileWebsite}
              required
            >
              <option value="GitHub">GitHub</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Personal Website">Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g johnDoe123"
              onChange={handleUserGitHubProfileName}
              value={userGitHubProfileName}
              required
            />
          </FormGroup>
        </Form.Row> */}
        {/* <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleSecondUserProfileWebsite}
              value={userSecondProfileWebsite}
              required
            >
              <option value="LinkedIn">LinkedIn</option>
              <option value="GitHub">GitHub</option>
              <option value="Portfolio Website">Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g johnDoe123"
              onChange={handleUserLinkedInProfileName}
              value={userLinkedInProfileName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleThirdUserProfileWebsite}
              value={userThirdProfileWebsite}
              required
            >
              <option value="Portfolio Website">Portfolio Website</option>
              <option value="GitHub">GitHub</option>
              <option value="LinkedIn">LinkedIn</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="johnDoe.com"
              onChange={handleUserPersonalWebsiteLink}
              value={userPersonalWebsiteLink}
              required
            />
          </FormGroup> */}
        {/* </Form.Row> */}
        <h1 className="text-dark font-weight-bold py-4">
          Educational Details
        </h1>
{/* 12th Standard  */}      
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel><b>High School Degree </b></FormLabel>
            <FormControl
              type="text"
              placeholder="12th Standard or HSC"
              onChange={handleUserHighSchoolDegreeName}
              value={userHighSchoolDegreeName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> <b>School Name</b> </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g govt school"
              onChange={handleUserHighSchoolName}
              value={userHighSchoolName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel><b>Year of Passed-Out</b></FormLabel>
            <FormControl
              type="text"
              onChange={handleUserHighSchoolDegreeStartingDate}
              value={userHighSchoolStartingDate}
              required
            />
          </FormGroup>
          {/* <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>University</FormLabel>
            <FormControl
              type="text"
              placeholder="Anna University or Bhartiyar University"
              onChange={handleUserHighSchoolDegreeEndingDate}
              value={userHighSchoolEndingDate}
              required
            />
          </FormGroup> */}
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel><b>Percentage </b></FormLabel>
            <FormControl
              type="text"
              onChange={handleUserPercentage}
              value={userPercentage}
              required
            />
          </FormGroup>
          {/* <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleUserHighSchoolExperience}
              value={userHighSchoolExperience}
              required
            />
          </FormGroup> */}
        </Form.Row>
{/* 10th Standard  */}
        <Form.Row>
        <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> <b>High School Degree </b></FormLabel>
            <FormControl
              type="text"
              placeholder= "10th Standard or SSLC"
              onChange={handleUserUniversityName}
              value={userUniversityName}
              required
            />
          </FormGroup>

<FormGroup as={Col} sm={12} md={6}>
            <FormLabel> <b>School Name</b> </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g govt school"
              onChange={handleUserHighSchoolExperience}
              value={userHighSchoolExperience}
              required
            />
          </FormGroup>      
  </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel><b>Year of Passed-Out</b> </FormLabel>
            <FormControl
              type="text"
              onChange={handleUserBachelorStartingDate}
              value={userBachelorStartingDate}
              required
            />
          </FormGroup>
          {/* <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserBachelorDegreeEndingDate}
              value={userBachelorEndingDate}
              required
            />
          </FormGroup> */}
 <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> <b>Percentage</b></FormLabel>
            <FormControl
              type="text"
              onChange={handleUserPercentageOne}
              value={userPercentageOne}
              required
            />
          </FormGroup>
          {/* <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleUserHighSchoolExperience}
              value={userHighSchoolExperience}
              required
            />
          </FormGroup> */}
        </Form.Row>

{/* College */}        
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> <b>College degree</b> </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g B.E or B.COM"
              onChange={handleUserCollegeDegreeName}
              value={userCollegeDegreeName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel><b> College Name </b></FormLabel>
            <FormControl
              type="text"
              placeholder="e.g JSREC"
              onChange={handleUserCollegeName}
              value={userCollegeName}
              required
            />
          </FormGroup>
          
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel><b>Year of Passed-Out</b></FormLabel>
            <FormControl
              type="text"
              onChange={handleUserCollegeStartingDate}
              value={userCollegeStartingDate}
              required
            />
          </FormGroup>
          {/* <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserCollegeDegreeEndingDate}
              value={userCollegeEndingDate}
              required
            />
          </FormGroup> */}
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> <b> Percentage</b></FormLabel>
            <FormControl
              type="text"
              onChange={handleUserPercentageTwo}
              placeholder="CGPA or percentage"
              value={userPercentageTwo}
              required
            />
          </FormGroup>
        </Form.Row>

{/* Project Work */}
<h1 className="text-dark font-weight-bold py-4">
          Project Work
        </h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={12}>
            <FormLabel>Title</FormLabel>
            <FormControl
              type="text"
              onChange={handleUserProjectTitle}
              value={userProjectTitle}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel>Role</FormLabel>
            <FormControl
              type="text"
              placeholder="Hardware Designer or Developer"
              onChange={handleUserProjectRole}
              value={userProjectRole}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Duration in Days</FormLabel>
            <FormControl
              type="text"
              onChange={handleUserProjectDuration}
              value={userProjectDuration}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              onChange={handleUserProjectDescription}
              value={userProjectDescription}
              required
            />
          </FormGroup>
        </Form.Row>        

<h1 className="text-dark font-weight-bold py-5">
          {" "}
Professional Experience{" "}
        </h1>
{/* First experience */}
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 1st Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g role:  junior web developer"
              onChange={handleUser1stExperience}
              value={user1stExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser1stCompanyName}
              value={user1stCompanyName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>From</FormLabel>
            <FormControl
              type="text"
              onChange={handleUser1stExperienceStartingDate}
              value={user1stExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>To</FormLabel>
            <FormControl
              type="text"
              onChange={handleUser1stExperienceEndingDate}
              value={user1stExperienceEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Work Highlights</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleUserKey}
              value={userKey}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUser1stCompanyExperience}
              value={user1stCompanyExperience}
              required
            />
          </FormGroup>       
        </Form.Row>

{/* Second Experience  */}
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 2nd Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="role: e.g junior web developer"
              onChange={handleUser2ndExperience}
              value={user2ndExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser2ndCompanyName}
              value={user2ndCompanyName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="text"
              onChange={handleUser2ndExperienceStartingDate}
              value={user2ndExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="text"
              onChange={handleUser2ndExperienceEndingDate}
              value={user2ndExperienceEndingDate}
              required
            />
          </FormGroup>

          <FormGroup as={Col} sm={12}>
            <Form.Label>Work Highlights</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleUserKeyOne}
              value={userKeyOne}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUser2ndCompanyExperience}
              value={user2ndCompanyExperience}
              required
            />
          </FormGroup>
        </Form.Row>



        {/* <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 3rd Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleUser3rdExperience}
              value={user3rdExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser3rdCompanyName}
              value={user3rdCompanyName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser3rdExperienceStartingDate}
              value={user3rdExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser3rdExperienceEndingDate}
              value={user3rdExperienceEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUser3rdCompanyExperience}
              value={user3rdCompanyExperience}
              required
            />
          </FormGroup>
        </Form.Row> */}
        <Form.Row>
          <FormGroup as={Col} sm={8}>
            <Form.Label>Write Your Skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="e.g HTML|CSS|REACTJS|NODEJS|EXPRESSJS"
              onChange={handleUserSkills}
              value={userSkills}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Declaration</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleUserDeclaration}
              value={userDeclaration}
              required
            />
          </FormGroup>
          
        </Form.Row>
        <div className='button-container'>
        <Button 
         className='btn btn-secondary'
         buttonStyle='btn--outline'
         buttonSize='btn--large' 
         onClick={handleUserResumeData}
        >
          Generate CV
        </Button>
        </div>
        {/* <div className="vertical-center"> <button type="button" onClick={handleUserResumeData}>Generate CV</button> </div> */}
      </Form>
    </Container>
  );
};

export default FormComponent;