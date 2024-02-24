class Solution
{
public:
    int maximumSetSize(vector<int> &nums1, vector<int> &nums2)
    {
        unordered_set<int> s1;
        unordered_set<int> s2;
        unordered_set<int> ans;
        int n = nums1.size();
        for (auto a : nums1)
        {
            s1.insert(a);
        }
        for (auto a : nums2)
        {
            s2.insert(a);
        }
        for (auto a : s1)
        {
            ans.insert(a);
        }
        for (auto a : s2)
        {
            ans.insert(a);
        }
        int min1 = 0;
        int min2 = 0;
        if (s1.size() < n / 2)
        {
            min1 = s1.size();
        }
        else
        {
            min1 = n / 2;
        }
        if (s2.size() < n / 2)
        {
            min2 = s2.size();
        }
        else
        {
            min2 = n / 2;
        }
        return min((int)ans.size(), min1 + min2);
    }
};