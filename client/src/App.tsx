import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GuildContext } from './contexts/GuildContext';
import { PartialGuild } from './utils/types';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { DashboardPage } from './pages/dashboardPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navbar } from './components/Navbar';
import './styles/aria-components.css';
import { NotFoundPage } from './pages/notFoundPage';
import { UserPage } from './pages/userPage';
import { ReportPage } from './pages/reportPage';
import { GuildPage } from './pages/guildPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: true,
      retry: false,
      staleTime: 60_000,
    },
  },
});

function App() {
  // States
  const [guild, setGuild] = useState<PartialGuild>();

  // Utility
  const updateGuild = (guild?: PartialGuild) => setGuild(guild);

  return (
    <QueryClientProvider client={queryClient}>
      <GuildContext.Provider value={{ guild, updateGuild }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Navbar title="Dashboard" />
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/guild"
            element={
              <ProtectedRoute blockGuild>
                <Navbar
                  title="Guild Settings"
                  iconUrl={guild && guild.icon}
                  returnLink
                />
                <GuildPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/user"
            element={
              <ProtectedRoute>
                <Navbar title="User Settings" returnLink />
                <UserPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/report"
            element={
              <ProtectedRoute>
                <Navbar title="Report Panel" returnLink />
                <ReportPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <NotFoundPage />
              </>
            }
          />
        </Routes>
      </GuildContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
