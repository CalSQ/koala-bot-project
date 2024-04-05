import { ReactNode, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { USER_ROLES } from '../utils/constants';
import { FetchAuthSession } from '../queries/FetchAuthSession';
import { GuildContext } from '../contexts/GuildContext';

type ProtectedRouteProps = {
  children: ReactNode;
  roles?: USER_ROLES[];
  blockGuild?: boolean;
};

const hasHighPrivledges = (userRoles: USER_ROLES[]) =>
  userRoles.includes(USER_ROLES.OWNER) || userRoles.includes(USER_ROLES.ADMIN);

export const ProtectedRoute = ({
  children,
  roles,
  blockGuild,
}: ProtectedRouteProps) => {
  const { data, isPending } = FetchAuthSession();
  const { guild } = useContext(GuildContext);
  const location = useLocation();

  if (blockGuild && !guild) {
    return <Navigate to="/dashboard" replace state={{ from: location }} />;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (data?.data) {
    if (roles) {
      const hasAccess =
        hasHighPrivledges(data.data.roles) ||
        roles.some((role) => data.data.roles.includes(role));
      if (!hasAccess) {
        return (
          <Navigate
            to={location.state?.from?.pathname ?? '/'}
            replace
            state={{ from: location }}
          />
        );
      }
    }
  } else {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};
