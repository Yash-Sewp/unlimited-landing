# Deploy to Render

## Quick Deploy Steps

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - The Unlimited landing page"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to [https://dashboard.render.com/](https://dashboard.render.com/)
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Render will auto-detect the `render.yaml` configuration

## Configuration Details

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `./dist`
- **Node Version**: 16+ (specified in package.json)
- **Auto-deploy**: Enabled on git pushes

## Environment Variables (if needed)
None required for this static site.

## Custom Domain
After deployment, you can add a custom domain in the Render dashboard under your service settings.

## Troubleshooting
- Ensure all files are committed to git
- Check build logs in Render dashboard if deployment fails
- Verify Node.js version compatibility (16+)
