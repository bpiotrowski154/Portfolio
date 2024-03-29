import React from 'react'
import CapstoneHome from '../assets/capstonehomeimg.png'
import CapstoneLogin from '../assets/capstoneloginimg.png'
import CapstoneNavNone from '../assets/capstonenavbarnouserimg.png'
import CapstoneNavStudent from '../assets/capstonenavbarstudent.png'
import CapstoneNavAdmin from '../assets/capstonenavbaradmin.png'
import CapstoneEditProfile from '../assets/capstoneeditprofileimg.png'
import CapstoneApply from '../assets/capstoneapplyjobimg.png'
import CapstoneMyApps from '../assets/capstonestudentapplicationsimg.png'
import CapstoneMyAppsEditable from '../assets/capstonestudentapplicationseditableimg.png'
import CapstoneEditApp from '../assets/capstonestudentapplicationsjobeditimg.png'
import CapstoneAdminApps from '../assets/capstoneadminappmanagementimg.png'
import CapstoneAdminCreateJob from '../assets/capstoneadmingcreatejobimg.png'
import CapstoneAdminJobs from '../assets/capstoneadminjobmanagementimg.png'
import CapstoneAdminUsers from '../assets/capstoneadminuserimg.png'

const Capstonedemo = () => {
  return (
    <div name="capstonedemo" className='w-full min-h-screen flex flex-col justify-center items-center p-4'>
        <div className='h-[80px]'></div>
        <p className='text-4xl font-bold inline border-b-4 border-[#5C8374] mb-6'>Capstone Project</p>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl font-bold'>Currently, I do not have this project hosted anywhere.</p>
            <p className='text-[#5C8374]'>//The GitHub repository contains instructions in the ReadMe file for local hosting</p>
        </div>
        <a href="https://github.com/bpiotrowski154/capstone" target='_blank' className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>GitHub</a>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-40'>
            <p className='pb-5'>
                In my culminating Software Engineering Capstone project, I collaborated with a group to develop a 
                comprehensive web application for managing academic instructor hiring needs. This semester-long 
                project involved designing and implementing features for both student applicants and administrative
                users. Users would have an account storing information about their academic history and be allowed to apply
                to jobs listed. Administrators would have access to all user applications and also be able to create and
                manage job listings.
            </p>
            <p className='border-b-4 border-[#5C8374] w-fit'>Significant Takeaways:</p>
            <ul className='takeaways'>
                <li>Learned about Python's Flask Framework</li>
                <li>Experience working in a team on a larger project</li>
                <li>Storage of user information within a database</li>
                <li>Dynamic pages displaying information relative to the user</li>
            </ul>

            <div className='demo-explanation'>
                <p >Landing Page</p>
                <img src={CapstoneHome}/>

                <p>Login Page</p>
                <img src={CapstoneLogin}/>

                <u>Different Navbars</u>
                <p>Not logged in</p>
                <img src={CapstoneNavNone}/>
                <p>Student User</p>
                <img src={CapstoneNavStudent}/>
                <p>Administrator</p>
                <img src={CapstoneNavAdmin}/>
                
                <p>Edit Profile Page</p>
                <img src={CapstoneEditProfile}/>

                <p>Student Applying for Job</p>
                <img src={CapstoneApply}/>

                <u>User's Submitted Applications Page</u>
                <p>Non-editable Application</p>
                <img src={CapstoneMyApps}/>
                <p>Editable Application</p>
                <img src={CapstoneMyAppsEditable}/>
                <p>Editing A Submitted Applciation</p>
                <img src={CapstoneEditApp}/>

                <u>Administration Page</u>
                <p>View/Manage Jobs</p>
                <img src={CapstoneAdminJobs}/>
                <p>Job Creation</p>
                <img src={CapstoneAdminCreateJob}/>
                <p>View/Manage Submitted Applications</p>
                <img src={CapstoneAdminApps}/>
                <p>View Users</p>
                <img src={CapstoneAdminUsers}/>            
            </div>
        </div>
        
        <a href="https://github.com/bpiotrowski154/capstone" target='_blank' className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>GitHub</a>
        
    </div>
  )
}

export default Capstonedemo