class Solution
{
public:
    long long solve(vector<int> &nums, int i, int n, vector<int> &dp)
    {
        if (i >= n)
        {
            return 0;
        }
        if (dp[i] != -1)
        {
            return dp[i];
        }
        long long mini = INT_MAX;
        for (int j = 1; j <= nums[i]; j++)
        {
            mini = min(mini, 1 + solve(nums, i + j, n, dp));
        }
        return dp[i] = mini;
    }
    int jump(vector<int> &nums)
    {
        vector<int> dp(nums.size(), -1);
        return solve(nums, 0, nums.size() - 1, dp);
    }
};