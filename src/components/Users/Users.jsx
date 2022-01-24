import styles from './users.module.css';

export const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.vokrug.tv/pic/person/5/e/c/e/5eced4f67539b9e857837d57ba13b0d8.jpeg',
                followed: false,
                fullName: 'Dmitry 1',
                status: 'I am a bos 1',
                location: {city: 'Minsk 1', country: 'Belarus 2'}
            },
            {
                id: 2,
                photoUrl: 'https://www.vokrug.tv/pic/person/5/e/c/e/5eced4f67539b9e857837d57ba13b0d8.jpeg',
                followed: true,
                fullName: 'Dmitry 2',
                status: 'I am a bos 2',
                location: {city: 'Minsk 1', country: 'Belarus 1'}
            },
            {
                id: 3,
                photoUrl: 'https://www.vokrug.tv/pic/person/5/e/c/e/5eced4f67539b9e857837d57ba13b0d8.jpeg',
                followed: false,
                fullName: 'Dmitry 3',
                status: 'I am a bos 3',
                location: {city: 'Minsk 2', country: 'Belarus 3'}
            },
            {
                id: 4,
                photoUrl: 'https://www.vokrug.tv/pic/person/5/e/c/e/5eced4f67539b9e857837d57ba13b0d8.jpeg',
                followed: true,
                fullName: 'Dmitry 4',
                status: 'I am a bos 4',
                location: {city: 'Minsk 3', country: 'Belarus 4'}
            },
            {
                id: 5,
                photoUrl: 'https://www.vokrug.tv/pic/person/5/e/c/e/5eced4f67539b9e857837d57ba13b0d8.jpeg',
                followed: false,
                fullName: 'Dmitry 5',
                status: 'I am a bos 5',
                location: {city: 'Minsk 2', country: 'Belarus 5'}
            },
        ]);
    }

    return (
        <>
            {
                props.users.map(u => <div key={u.id}>
                    <span><div>
                        <img src={u.photoUrl} alt="" className={styles.userPhoto}/>
                    </div>
                        {
                            u.followed
                            ? <button onClick={() => {props.unFollow(u.id)}}>UnFollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </>
    )
}