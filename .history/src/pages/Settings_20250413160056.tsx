import React from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth } from '@/context/AuthContext';
import { BellIcon, UserIcon, ShieldIcon, SettingsIcon } from 'lucide-react';

const Settings = () => {
  const { user } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto py-8 space-y-8">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Profile Settings */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <UserIcon className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-medium">Profile Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Display Name</Label>
              <Input id="name" defaultValue={user?.name} />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={user?.email} />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue="UTC">
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UTC">UTC</SelectItem>
                  <SelectItem value="EST">Eastern Time</SelectItem>
                  <SelectItem value="PST">Pacific Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <BellIcon className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-medium">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Enable Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive reminders and updates
                </p>
              </div>
              <Switch
                checked={notificationsEnabled}
                onCheckedChange={setNotificationsEnabled}
              />
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <Label>Notification Preferences</Label>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Workout Reminders</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sleep Tracking</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Nutrition Updates</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Goal Achievements</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Appearance */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <SettingsIcon className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-medium">Appearance</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Toggle dark mode theme
                </p>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </div>
        </Card>

        {/* Privacy */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <ShieldIcon className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-medium">Privacy & Security</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            
            <Button>Update Password</Button>
          </div>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;