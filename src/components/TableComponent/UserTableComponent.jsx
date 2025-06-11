import { useAuth } from 'context/AuthContext'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, IconButton, Input, InputLabel, Menu, MenuItem, Select } from '@mui/material';
import DataTable from 'examples/Tables/DataTable';
import { MoreVert } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import MDInput from 'components/MDInput';
import { toast } from 'react-toastify';

function UsersTableComponent() {
  const { allUsers } = useAuth()
  const formattedAllUsers = allUsers.map((user) => ({
    ...user,
    account: {
      balance: user.account.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 2 }),
    },
    isAdmin: user.isAdmin ? 'Admin' : 'User',
    isActive: user.isActive ? 'Active' : 'Disabled',
    createdAt: moment(user.createdAt).format('DD MMM yyy'),
    action: <UserActionMenu rowId={user._id} wallet={user.account.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 2 })} isActive={user.isActive} />,
  }))
  return (
    <div className="">
      <div className=" text-[26px] pb-2 font-bold ">Users Table</div>
      <DataTable
        canSearch={true}
        table={{
          columns: [
            { Header: 'Fullname', accessor: 'fullName' },
            { Header: 'Username', accessor: 'username' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Age', accessor: 'age' },
            { Header: 'Gender', accessor: 'gender' },
            { Header: 'Country', accessor: 'country' },
            { Header: 'Balance', accessor: 'account.balance' },
            { Header: 'Date', accessor: 'createdAt' },
            { Header: 'Type', accessor: 'isAdmin' },
            { Header: 'Status', accessor: 'isActive' },
            { Header: 'Action', accessor: 'action' },
          ],
          rows: [...formattedAllUsers],
        }}
      />
    </div>
  )
}

export default UsersTableComponent

const UserActionMenu = ({ rowId, wallet, isActive }) => {
  const { adminUpdateUserWallet, adminDisableUser, AdminDeleteUser, updatedCurrency } = useAuth()
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openCurrencyDialog, setOpenCurrencyDialog] = useState(false);
  const [accountDetail, setAccountDetail] = useState({})
  const [walletAmount, setWalletAmount] = useState(wallet);
  const [currency, setCurrency] = useState('USD');
  const open = Boolean(anchorEl);
  const { profile } = useAuth()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCurrencyClose = () => {
    setAnchorEl(null);
  };
  const handleUpdateWalletData = (e) => {
    const { name, value } = e.target
    setAccountDetail(prev => ({ ...prev, [name]: value }))
  }
  const handleDialogOpen = () => {
    setOpenDialog(true);
    handleClose();
  };
  const handleCurrencyDialogOpen = () => {
    setOpenCurrencyDialog(true);
    handleCurrencyClose();
  };


  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleCurrencyDialogClose = () => {
    setOpenCurrencyDialog(false);
  };

  const handleWalletUpdate = async () => {
    try {
      await adminUpdateUserWallet({ id: rowId, ...accountDetail, code: profile?.account?.number });
      toast.success('account balance updated successfully')
      handleDialogClose();
    } catch (error) {
      console.error("Wallet update failed:", error.message);
      toast.error('Account balance failed to update')
    }
  };
  const deleteUser = (id) => async () => {
    try {
      await AdminDeleteUser(id);
      handleDialogClose();
      toast.success('User deleted successfully')
    } catch (error) {
      console.error("User deletion failed:", error.message);
      toast.error('User failed to delete')
    }
  }
  useEffect(() => {
    console.log(accountDetail)
  }, [accountDetail])

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  }
  useEffect(() => { console.log(currency) }, [currency])
  const updateCurrency = async () => {
    try {
      await updatedCurrency({ targetUserId: rowId, currency }); // ✅ Added `await`
      toast.success('Currency updated successfully');
      handleCurrencyDialogClose(); // Optional: Close dialog on success
    } catch (error) {
      toast.error('Failed to update currency');
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={() => {
          adminDisableUser({ id: rowId });
          handleClose()
        }}>{isActive ? "Disable" : "Activate"}</MenuItem>
        <MenuItem onClick={handleDialogOpen}>Update Wallet</MenuItem>
        <MenuItem onClick={handleCurrencyDialogOpen}>Update Currency</MenuItem>
        <MenuItem onClick={deleteUser(rowId)}>Delete User</MenuItem>
      </Menu>
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>Update Wallet</DialogTitle>
        <DialogContent>

          <p> <b> Previous Balance:</b> {wallet.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
          <MDInput
            autoFocus
            margin="dense"
            label="Update Wallet"
            type="number"
            fullWidth
            name='amount'
            variant="standard"

            onChange={handleUpdateWalletData}
          />
          <div className='flex gap-2 mb-2 flex-col md:flex-row'>
            <div className='w-full '>
              <MDInput type="text" name='name' label='input Name' className='w-full' onChange={handleUpdateWalletData} />
            </div>
            <div className='w-full '>
              <MDInput type="text" name='description' label='input description' className='w-full' onChange={handleUpdateWalletData} />
            </div>
          </div>
          <div className=' flex flex-col md:flex-row gap-3  mb-2'>
            <div className='w-full'>
              <MDInput type="text" label='input channel / bank' name='channel' className='w-full' onChange={handleUpdateWalletData} />
            </div>
            <div className='flex w-full gap-2'  >
              <div className='flex items-center'><input type="radio" name='method' value={'+'} onChange={handleUpdateWalletData} /> Credit </div>
              <div className='flex items-center'><input type="radio" name='method' value={'-'} onChange={handleUpdateWalletData} /> debit </div>
            </div>
          </div>

          <div className='w-full'>
            <MDInput type="password" name='password' label='input password' className='w-full' onChange={handleUpdateWalletData} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleWalletUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openCurrencyDialog} onClose={handleCurrencyDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>Update Currency</DialogTitle>
        <DialogContent>


          <select
            name="currency"
            id="currency"
            onChange={handleCurrencyChange} // ✅ Direct function reference
            value={currency}
            className="p-2 rounded bg-white"
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
          </select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCurrencyDialogClose}>Cancel</Button>
          <Button onClick={updateCurrency}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};


UserActionMenu.propTypes = {
  rowId: PropTypes.string.isRequired,
  wallet: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};