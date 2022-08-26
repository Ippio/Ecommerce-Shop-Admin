import './style.css'

const UserSection = ({username,role})=>{
    return(
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4'>
            <UserCard ></UserCard>
            <UserCard ></UserCard>
            <UserCard ></UserCard>
            <UserCard ></UserCard>
            <UserCard ></UserCard>
            <UserCard ></UserCard>
        </div>
    )
}

const UserCard= ({username,role})=>{
    return(
        <span className='user-card'>
            <div className='user-head'>
                <image src="https://mangadex.org/avatar.png" className='user-avatar' style={{width:'32px',height:'32px'}}/>
                <div className='line-clamp-1 break-all'>{username || 'user'}</div>
                <div className='role-tag ml-auto' style={{backgroundColor: 'rgb(250, 250, 250)', color: 'rgb(0, 0, 0)'}}>{role || 'user'}</div>
            </div>
        </span>
    )
}

export default UserSection