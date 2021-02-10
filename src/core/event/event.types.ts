import { Action } from 'redux';

type EventStatus = 'INITIAL' | 'GETTING_EVENT' | 'READY';

type EventActionType = 'EVENT/GET_EVENT' | 'EVENT/READY';

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

/*
event: {
    id: 'eventId',
    name: 'someEvent',
    description: 'description',
    days: string[],
    hours: string[],
  },
*/