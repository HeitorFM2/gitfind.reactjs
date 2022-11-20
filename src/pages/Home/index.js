import background from '../../assets/background.png';
import ItemList from '../../components/ItemList';
import Header from '../../components/Header';
import {useState} from 'react';
import {Contents, Backgroundimg, Info, Profile, ImgProfile, Repositories, DivProfile, ProfileDesc} from './style';

function App() {
  const[currentUser,setCurrentUser] = useState('');
  const[repost,setRepost] = useState('');

  let user;
  const updateCurrentUser = User => {
    user = User;
    handleGetDate();
  }


  const handleGetDate = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name){
      const {avatar_url, name, bio, login, location} = newUser;
      setCurrentUser({avatar_url, name, bio, login, location})

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepost = await reposData.json();


      if(newRepost.length){
        setRepost(newRepost);
      }
    }
  }


  return (
    <div className="App">
      <Header handleCurrentUser={updateCurrentUser}/>
      <Contents>

        <Backgroundimg src={background} alt=""/>

        <Info>

            {currentUser?.name ? (<>
              <DivProfile>
                <Profile>

                  <ImgProfile src={currentUser.avatar_url} className='ImgProfile' alt='profile' />
                  <ProfileDesc>
                    <div>
                      <h3>{currentUser.name}</h3>
                      <span>@{currentUser.login}</span>
                      <p>
                        {currentUser.bio}
                      </p>
                    </div>
                    <div className='teste'>
                        {currentUser?.location ? (
                          <span>{currentUser.location}</span>
                        ): null}
                    </div>
                  </ProfileDesc>
                  
                </Profile>
              </DivProfile>
            </>
            ): null}

            
            {repost?.length? (
              <Repositories>
                <h4>Repositório</h4>

                {repost.map(repos => (
                  <ItemList title={repos.name} description={repos.description} html_url={repos.html_url}/>
                ))}
                
              </Repositories>
            ): null}

        </Info>

      </Contents>

    </div>
  );
}

export default App;
