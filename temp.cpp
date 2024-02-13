class Solution
{
public:
    bool ispal(string s)
    {
        int st = 0;
        int e = s.size() - 1;
        while (st < e)
        {
            if (s[st] == s[e])
            {
                st++;
                e--;
            }
            else
            {
                return false;
            }
        }
        return true;
    }
    string firstPalindrome(vector<string> &words)
    {
        for (auto s : words)
        {
            if (ispal(s))
            {
                return s;
            }
        }
        return "";
    }
};