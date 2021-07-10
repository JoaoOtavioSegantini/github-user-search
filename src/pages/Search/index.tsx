import ImageLoader from 'core/components/Loaders/ImageLoader';
import InfoLoader from 'core/components/Loaders/InfoLoader';
import Searchbox from 'core/components/Searchbox';
import UserResponse from 'core/components/UserResponse';
import { User } from 'core/types/User';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react'



const Search = () => {
  const [loading, setIsLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [userResponse, setUserResponse] = useState<User>();


  const getGitUser = () => {
    const user = document.querySelector('input')!.value

    if (!user) return

    setIsLoading(true)
    setActive(true)

    makeRequest({ user }).then(response => setUserResponse(response.data))
      .finally(() => {
        setIsLoading(false);
        // console.log(userResponse)

      }

      ).catch(err => console.log(err))

  };


  return (
    <div className="search-container body-color">
      <div className="search-page">
        <Searchbox value={getGitUser} />
        {active && <div className="search-response">
          {loading ? <div className="box loader"> <div className="img-perfil loader"><ImageLoader /></div>
            <div className="info loader"><InfoLoader /></div></div> :
            <UserResponse user={userResponse!} />
          }
        </div>}
      </div>
    </div>
  )
};

export default Search;