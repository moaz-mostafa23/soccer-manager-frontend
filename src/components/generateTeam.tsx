import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { useUser } from '@/context/UserContext';
import { generateTeam } from '@/services/authService';

const GenerateTeamDialog = () => {
    const [teamName, setTeamName] = useState('');
    const { user } = useUser();

    const handleGenerateTeam = async () => {
        if (!teamName) return;

        try {
            await generateTeam({ teamName, userId: user?.id });
        } catch (error) {
            console.error('Failed to generate team:', error);
        }
    };

    return (
        <Dialog open={true}>
            <DialogTitle>Generate Team</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Team Name"
                    type="text"
                    fullWidth
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setTeamName('')}>Cancel</Button>
                <Button onClick={handleGenerateTeam} color="primary">Generate</Button>
            </DialogActions>
        </Dialog>
    );
};

export default GenerateTeamDialog;