import { PartialGuild, UserSession } from './types';

export const fetchGuildIcon = (guild?: PartialGuild) =>
  guild?.icon
    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
    : '/images/defaultDiscordIcon.png';

export const fetchUserIcon = (user?: UserSession) =>
  user?.avatar
    ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
    : '/images/defaultDiscordIcon.png';
