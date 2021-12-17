import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, ...props}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={posts}/>
        </div>
    )
}

export default Profile;