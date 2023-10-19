import { useState } from "react"
import './editProfile.css'
import profileIcon from '../../assets/Group (1).png'

const EditProfilePage = () => {
    const [info, setInfo] = useState({
        name:'',
        faculty: '',
        department: '',
        matric: '',
        level: '',
        session: ''
    })

    const update = (e) => {
       const {value, name} = e.target
       setInfo(prevState => ({...prevState, [name]: value}))
    }

    return (
        <section className="font-serrat flex flex-col gap-y-2 pt-4 mb-6">
            <div className="flex items-center gap-x-2 p-1 w-max md:gap-x-5 self-center">
                <div className="w-43 h-43 md:w-80 md:h-80">
                    <img className="w-full h-full object-contain object-center" src={profileIcon} alt="user profile icon" />
                </div>
                <p className="text-2xl text-bgColor md:text-40">Hi, Joy Glory</p>
            </div>

            
            <form className="w-11/12 md:w-2/3 flex items-center flex-col gap-y-4 md:gap-y-6 self-center px-2" onSubmit={ (e) => e.preventDefault()}>
                <p className="text-2xl font-semibold md:text-3xl">Edit User Info</p>
                
                <ul className="flex flex-col gap-y-3 md:gap-y-4 list-none w-full">
                    <li className="inp-cont">
                        <label htmlFor="name" className="label">Name:</label>
                        <input 
                            type="text" 
                            name="name"
                            value={info.name}
                            onChange={(e) => update(e)}
                            placeholder="Joy Glory"
                            className="input"
                        />
                    </li>

                    <li className="inp-cont">
                        <label htmlFor="faculty" className="label">Faculty:</label>
                        <input 
                            type="text" 
                            name="faculty"
                            value={info.faculty}
                            onChange={(e) => update(e)}
                            placeholder="Science"
                            className="input"
                        />
                    </li>

                    <li className="inp-cont">
                        <label htmlFor="dept" className="label">Department:</label>
                        <input 
                            type="text"
                            name="dept"
                            value={info.department}
                            onChange={(e) => update(e)}
                            placeholder="Computer Science"
                            className="input"
                        />
                    </li>

                    <li className="inp-cont">
                        <label htmlFor="matric" className="label">Matric Number:</label>
                        <input 
                            type="text" 
                            name="matric"
                            value={info.matric}
                            onChange={(e) => update(e)}
                            placeholder="SLT/2021/1025"
                            className="input"
                        />
                    </li>

                    <li className="inp-cont">
                        <label htmlFor="lvl" className="label">Level:</label>
                        <input 
                            type="text" 
                            name="lvl"
                            value={info.lvl}
                            onChange={(e) => update(e)}
                            placeholder="200"
                            className="input"
                        />
                    </li>

                    <li className="inp-cont">
                        <label htmlFor="session" className="label">Session:</label>
                        <input 
                            type="text" 
                            name="session"
                            
                            value={info.session}
                            onChange={(e) => update(e)}
                            placeholder="2022/2023"
                            className="input"
                        />
                    </li>

                </ul>

                <button className="update-info">Update Info</button>
            </form>
        </section>
    )
}

export default EditProfilePage