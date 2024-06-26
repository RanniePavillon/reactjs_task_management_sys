import { Suspense, useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material/';
import { AppContext } from './core/contexts/AppContext';
import { MainRoute } from "./core/routers/Main";
import { SnakeLoader } from './core/loaders/SnakeLoader'
import { TLogo } from './core/Icons';
import { AuthRoute } from './core/routers/Auth';

const __LOCALDB = JSON.parse(localStorage.getItem('tms_app_db'))
const __LOCALSESSION = JSON.parse(localStorage.getItem('tms_app_session'))

export const App = () => {
	const { app_state } = useContext(AppContext)
	const { prefetch, __DB, __SESSION } = {...app_state}
	
	useEffect(() => {
		__DB.set(__LOCALDB !== null ? __LOCALDB : [])
		__SESSION.set(__LOCALSESSION)

		setTimeout(() => {
			prefetch.set(true)
		}, 500);

		if (window.location.pathname === '/' && __LOCALSESSION !== null) {
			window.location.href = '/tasks/all'
		}
		console.log(`TASK MANAGEMENT V1.0.1 is running`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Box width="100%" height="100%" >
			{
				prefetch.data ? (
					<Router>
						<Suspense fallback={
							<Box height="100%" width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
								<TLogo width={60} height={60} />
								<Box mt={4}>
									<SnakeLoader size={8} bg="#009E6A" distance="0.3rem" />
								</Box>
							</Box>
						}>
							{__SESSION.data !== null ? <MainRoute /> : <AuthRoute />}
						</Suspense>
					</Router>
				) : (
					<Box height="100%" width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
						<TLogo width={60} height={60} />
						<Box mt={4}>
							<SnakeLoader size={10} bg="#009E6A" distance="4px" />
						</Box>
					</Box>
				)
			}
		</Box>
	)
}