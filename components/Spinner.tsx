
import React from 'react';
import { Loader } from 'lucide-react';

interface SpinnerProps {
    message?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ message = 'Loading...' }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
            <Loader className="animate-spin text-indigo-400" size={48} />
            <p className="text-lg text-slate-300">{message}</p>
        </div>
    );
};

export default Spinner;
