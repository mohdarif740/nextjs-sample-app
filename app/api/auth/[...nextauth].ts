import NextAuth from 'next-auth';
import GithubProdiver from 'next-auth/providers/github';

export const authOptions = {
  providers: [GithubProdiver({ clientId: 'Ov23li7BaoOxk8g0FbVg',
     clientSecret: '163f6de301594741c19f5c083380eb98d3458332' })],
};

export default NextAuth(authOptions);
