import { User } from 'core/types/User';
import ButtonIcon from '../ButtonIcon';
import formatDate from 'core/utils/format-date';

import './styles.scss'

type Props = {
  user: User;
}



const UserResponse = ({ user }: Props) => {

  return (
    <div className="box">
      <div className="img-perfil">
        <img src={user?.avatar_url || ""} width={284} height={280} alt="Imagem do perfil do usuário do github" />
        <a href={`${user?.html_url}` || ""} target="_new">
          <ButtonIcon text="Ver perfil" />
        </a>
      </div>
      <div className="info">
        <div className="bars">
          <span className="bar1">Repositórios públicos: {user?.public_repos}</span>
          <span className="bar2">Seguidores: {user?.followers}</span>
          <span className="bar3">Seguindo: {user?.following}</span>
        </div>
        <div className="details">
          <div className="primary">Informações</div>
          <div className="repository">
            <div className="detail">Empresa:<span> {user?.company}</span></div>
            <div className="detail">Website/Blog:<span> {user?.blog}</span></div>
            <div className="detail">Localidade:<span> {user?.location}</span></div>
            <div className="detail">Membro desde: <span> {formatDate(new Date(user?.created_at))}</span></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserResponse;