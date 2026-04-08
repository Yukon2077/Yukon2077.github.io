import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import { headerDetails, contacts, skills } from "./shared/Data";
import pdfFile from "./assets/yuvankumar_resume.pdf";

export default function App() {
  return (
    <div className='min-h-screen bg-primary-950 p-2 text-primary-50'>
      <div className='flex flex-col gap-5 font-sans max-w-4xl mx-auto bg-primary-900 p-5 rounded-2xl shadow-xl inset-shadow-xs inset-shadow-primary-500'>
        {/* HEADER SECTION */}
        <div className='flex flex-col gap-2'>
          <div className='text-primary-50 text-4xl'>
            <span className='inline-block'>{headerDetails.name}</span>
            <span className='inline-block text-primary-300 text-3xl'>
              @{headerDetails.id}
            </span>
          </div>

          {/* <div className='text-primary-100 text-2xl'>{headerDetails.role}</div>
          <div className='text-primary-200 text-base'>
            {headerDetails.summary}
          </div> */}

          <div className='text-primary-200'>
            <span className='text-2xl'>{headerDetails.role} </span>
            <span className='text-base'>{headerDetails.summaryAfterRole}</span>
          </div>

          <a className='button mx-auto' href={pdfFile} download>
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </div>

        {/* SKILLS */}
        <div className='flex flex-col flex-wrap gap-2'>
          {skills.map(skill => (
            <div>
              <div className='text-primary-300 mb-1'>{skill.category}</div>
              <div className='flex gap-2 flex-wrap'>
                {skill.skills.map(skillName => (
                  <div className='transition-all py-2 px-5 bg-primary-800 rounded-4xl hover:bg-primary-700'>
                    {skillName}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CONTACT DETAILS */}
        <div className='flex flex-col'>
          <div className='flex gap-5'>
            {contacts.map(contact => (
              <a className='icon-button' target='_blank' href={contact.link}>
                <FontAwesomeIcon icon={contact.icon} className='text-xl' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
