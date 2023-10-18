import { useState } from "react"

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
        <section className="font-serrat">
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <p>Hi, Joy Glory</p>
                </div>

                <p>Edit User Info</p>
            </div>
            
            <form>
                <ul>
                    <li>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name"
                            value={info.name}
                            onChange={(e) => update(e)}
                            placeholder="Joy Glory"
                        />
                    </li>

                    <li>
                        <label htmlFor="faculty">Faculty:</label>
                        <input 
                            type="text" 
                            id="faculty"
                            value={info.faculty}
                            onChange={(e) => update(e)}
                            placeholder="Science"
                        />
                    </li>

                    <li>
                        <label htmlFor="dept">Department:</label>
                        <input 
                            type="text"
                            id="dept"
                            value={info.department}
                            onChange={(e) => update(e)}
                            placeholder="Computer Science"
                        />
                    </li>

                    <li>
                        <label htmlFor="matric">Matric Number:</label>
                        <input 
                            type="text" 
                            id="matric"
                            value={info.matric}
                            onChange={(e) => update(e)}
                            placeholder="SLT/2021/1025"
                        />
                    </li>

                    <li>
                        <label htmlFor="lvl">Level:</label>
                        <input 
                            type="text" 
                            id="lvl"
                            value={info.lvl}
                            onChange={(e) => update(e)}
                            placeholder="SLT/2021/1025"
                        />
                    </li>

                    <li>
                        <label htmlFor="session">Session:</label>
                        <input 
                            type="text" 
                            id="session"
                            
                            value={info.session}
                            onChange={(e) => update(e)}
                            placeholder="2022/2023"
                        />
                    </li>

                </ul>

                <button>Update Info</button>
            </form>
        </section>
    )
}

export default EditProfilePage