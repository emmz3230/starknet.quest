import { duration } from "@mui/material";

export type LeaderboardTopperParams = {
  addr: string;
  duration: "week" | "month" | "all";
};

export type LeaderboardRankingParams = {
  addr: string;
  page_size: number;
  shift: number;
  duration: "week" | "month" | "all";
};

const baseurl = process.env.NEXT_PUBLIC_API_LINK;

export const fetchLeaderboardToppers = async (
  params: LeaderboardTopperParams
) => {
  try {
    const { addr, duration } = params;
    const response = await fetch(
      `${baseurl}/leaderboard/get_static_info?addr=${addr}&duration=${duration}`
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const fetchLeaderboardRankings = async (
  params: LeaderboardRankingParams
) => {
  try {
    const { addr, page_size, shift, duration } = params;
    const response = await fetch(
      `${baseurl}/leaderboard/get_ranking?addr=${addr}&page_size=${page_size}&shift=${shift}&duration=${duration}`
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getCompletedQuestsOfUser = async (address: string) => {
  try {
    const response = await fetch(
      `${baseurl}/get_completed_quests?addr=${address}`
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getBoosts = async () => {
  try {
    const response = await fetch(`${baseurl}/boost/get_boosts`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getQuestsInBoost = async (id: string) => {
  try {
    const response = await fetch(`${baseurl}/boost/get_quests?boost_id=${id}`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getBoostById = async (id: string) => {
  try {
    const response = await fetch(`${baseurl}/boost/get_boost?id=${id}`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getQuestParticipants = async (id: number) => {
  try {
    const response = await fetch(
      `${baseurl}/get_quest_participants?quest_id=${id}`
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getQuestBoostClaimParams = async (id: number) => {
  try {
    const response = await fetch(
      `${baseurl}/boost/get_claim_params?boost_id=${id}`
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getPendingBoostClaims = async (addr: string) => {
  try {
    const response = await fetch(
      `${baseurl}/boost/get_pending_claims?addr=${addr}`
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
