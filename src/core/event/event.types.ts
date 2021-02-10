import { Action } from 'redux';

type EventStatus = 'INITIAL' | 'GETTING_EVENT' | 'READY' | 'NOTFOUND';

type EventActionType = 'EVENT/GET' | 'EVENT/READY' | 'EVENT/NOTFOUND';

interface EventDetails {
  name: string
  description: string
  days: string[]
  hours: string[]
}

interface EventPayload {
  status: EventStatus
  id?: string
  name?: string
  description?: string
  days?: string[]
  hours?: string[]
}

interface Event {
  status: EventStatus
  id: string
  name: string
  description: string
  days: string[]
  hours: string[]
}

interface EventAction extends Action {
  type: EventActionType
  payload: EventPayload
}

export type {
  EventDetails,
  Event,
  EventAction
}
