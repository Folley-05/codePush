import React from 'react'
import { Icon } from '@ui-kitten/components'
import { EvaIconsPack} from '@ui-kitten/eva-icons'
import {FeatherIconsPack} from './feather-icons'

const Arrow = (props) => (
    <Icon name='arrow-forward' {...props} />
);
const FacebookIcon = (props) => (
    <Icon name='facebook' {...props} />
);
const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);
const MenuIcon=(props)=>(<Icon {...props} name="more-vertical"  />)
const SunIcon=(props)=>(<Icon {...props} name="sun-outline"  />)
const AppsIcon=(props)=>(<Icon {...props} name="apps" pack="feather" />)
const GamesIcon=(props)=>(<Icon {...props} name="games" pack="feather" />)
const StartIcon=(props)=>(<Icon {...props} name="star" pack="feather" />)

export { Arrow, FacebookIcon, BackIcon, MenuIcon, SunIcon, AppsIcon, GamesIcon, StartIcon }