import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { CircularProgress } from '@mui/material';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return <CircularProgress />
    }

    return children;
};

export default ProtectedRoute;