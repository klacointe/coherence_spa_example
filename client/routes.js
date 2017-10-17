import Layout from 'containers/layout'
import Home from 'containers/home'
import SessionsNew from 'containers/sessions/new'
import RegistrationsNew from 'containers/registrations/new'
import RegistrationsEdit from 'containers/registrations/edit'
import ConfirmationsNew from 'containers/confirmations/new'
import ConfirmationsEdit from 'containers/confirmations/edit'
import UnlocksNew from 'containers/unlocks/new'
import PasswordsNew from 'containers/passwords/new'
import PasswordsEdit from 'containers/passwords/edit'
import InvitationsNew from 'containers/invitations/new'
import InvitationsCreateUser from 'containers/invitations/create_user'
import InvitationsResend from 'containers/invitations/resend'

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/sessions/new',
        component: SessionsNew
      },
      {
        path: '/registrations/new',
        component: RegistrationsNew
      },
      {
        path: '/registrations/edit',
        component: RegistrationsEdit
      },
      {
        path: '/unlocks/new',
        component: UnlocksNew
      },
      {
        path: '/confirmations/new',
        component: ConfirmationsNew
      },
      {
        path: '/confirmations/edit',
        component: ConfirmationsEdit
      },
      {
        path: '/passwords/new',
        component: PasswordsNew
      },
      {
        path: '/passwords/edit',
        component: PasswordsEdit
      },
      {
        path: '/invitations/new',
        component: InvitationsNew
      },
      {
        path: '/invitations/create_user',
        component: InvitationsCreateUser
      },
      {
        path: '/invitations/resend',
        component: InvitationsResend
      }
    ]
  }
]

export default routes
