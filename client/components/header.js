import React, {Component} from 'react'
import Link from 'react-router-dom/Link'

export default class Header extends Component {
  render() {
    const { user, onSignOut, onDestroyAccount } = this.props
    return (
      <header>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          {!user &&
            <li>
              <Link to="/sessions/new"> Sign in </Link>
            </li>
          }
          {!user &&
            <li>
              <Link to="/registrations/new"> Sign up </Link>
            </li>
          }
          {!user &&
            <li>
              <Link to="/unlocks/new"> Unlock account </Link>
            </li>
          }
          {!user &&
            <li>
              <Link to="/confirmations/new"> Resend confirmation </Link>
            </li>
          }
          {!user &&
            <li>
              <Link to="/confirmations/edit"> Confirm account </Link>
            </li>
          }
          {!user &&
            <li>
              <Link to="/passwords/new"> Reset password </Link>
            </li>
          }
          {!user &&
            <li>
              <Link to="/passwords/edit"> Change password </Link>
            </li>
          }
          {user &&
            <li>
              Hello {user.get('email')}
            </li>
          }
          {user &&
            <li>
              <Link to="/registrations/edit"> Account </Link>
            </li>
          }
          {user &&
            <li>
              <Link to="/invitations/new"> New invitation </Link>
            </li>
          }
          {user &&
            <li>
              <Link to="/invitations/resend"> Resend invitation </Link>
            </li>
          }
          {!user &&
            <li>
              <Link to="/invitations/create_user"> Invitation create user </Link>
            </li>
          }
          {user &&
            <li>
              <a href='#' onClick={onDestroyAccount}> Destroy account </a>
            </li>
          }
          {user &&
            <li>
              <a href='#' onClick={onSignOut}> Sign out </a>
            </li>
          }
        </ul>
      </header>
    )
  }
}
