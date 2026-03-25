export type ActivityType =
  | 'unknown'
  | 'stationary'
  | 'walking'
  | 'running'
  | 'cycling'
  | 'automotive';

export interface Activity {
  type: ActivityType;
  confidence: number;
}

export interface Location {
  id: number;
  uuid: string;
  timestamp: string;
  latitude: number;
  longitude: number;
  altitude: number;
  speed: number;
  heading: number;
  accuracy: number;
  speed_accuracy: number;
  heading_accuracy: number;
  altitude_accuracy: number;
  is_moving: boolean;
  activity?: Activity;
  event: string;
  extras: string;
  synced: boolean;
  created_at: string;
}

export interface Config {
  desiredAccuracy: number;
  distanceFilter: number;
  stationaryRadius: number;
  stopTimeout: number;
  debug: boolean;
  stopOnTerminate: boolean;
  startOnBoot: boolean;
  url: string;
  syncThreshold: number;
  maxBatchSize: number;
  syncRetryBaseSeconds: number;
  enabled: boolean;
  schedule?: string[];
  scheduleUseAlarmManager?: boolean;
}

export interface SyncState {
  enabled: boolean;
  connected: boolean;
  syncInFlight: boolean;
  unsyncedCount: number;
}

export interface State {
  enabled: boolean;
  tracking: boolean;
  isMoving: boolean;
  schedulerRunning: boolean;
  activity?: Activity;
  sync: SyncState;
  config: Config;
}

export interface ActivityChangeEvent {
  activity: Activity;
}

export interface MotionChangeEvent {
  location: Location;
  isMoving: boolean;
}

export interface Geofence {
  identifier: string;
  latitude: number;
  longitude: number;
  radius: number;
  notifyOnEntry: boolean;
  notifyOnExit: boolean;
  notifyOnDwell: boolean;
  loiteringDelay: number;
  extras?: string;
}

export interface GeofenceEvent {
  identifier: string;
  action: 'ENTER' | 'EXIT' | 'DWELL';
  location?: Location;
  extras?: string;
}

export interface ScheduleEvent {
  enabled: boolean;
}

export interface Subscription {
  remove: () => void;
}
