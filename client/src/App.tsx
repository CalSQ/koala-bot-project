import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GuildContext } from './contexts/GuildContext';
import { PartialGuild } from './utils/types';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { DashboardPage } from './pages/dashboardPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navbar } from './components/Navbar';
import { NotFoundPage } from './pages/notFoundPage';
import { UserPage } from './pages/userPage';
import { ReportPage } from './pages/reportPage';
import { GuildPageGeneral } from './pages/guildPage';
import { SidebarBase } from './styles/base';
import { Sidebar } from './components/Sidebar';

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
  const [sidebar, setSidebar] = useState<boolean>(true);

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
            path="/dashboard/user"
            element={
              <ProtectedRoute>
                <Navbar title="User Settings" returnItem />
                <UserPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/report"
            element={
              <ProtectedRoute>
                <Navbar title="Report Panel" returnItem />
                <ReportPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/guild"
            element={
              <ProtectedRoute blockGuild>
                <Navbar
                  title="Guild Settings"
                  sidebarState={sidebar}
                  setSidebarState={setSidebar}
                  returnItem
                />
                <SidebarBase $sidebarState={sidebar}>
                  <Sidebar />
                  <GuildPageGeneral />
                </SidebarBase>
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
