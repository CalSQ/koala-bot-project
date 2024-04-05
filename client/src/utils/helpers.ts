import { PartialGuild, UserSession } from './types';
import defaultDiscordIcon from '../assets/defaultDiscordIcon.png';

export const fetchGuildIcon = (guild?: PartialGuild) =>
  guild?.icon
    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
    : defaultDiscordIcon;

export const fetchUserIcon = (user?: UserSession) =>
  user?.avatar
    ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
    : defaultDiscordIcon;
