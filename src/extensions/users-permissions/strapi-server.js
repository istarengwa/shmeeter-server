module.exports = (plugin) => {
    plugin.controllers.user.updateMe = (ctx) => {
        ctx.params.id = ctx.state.user.id;
        return plugin.controllers.user.update(ctx);
    }

    plugin.routes['content-api'].routes.push({
        method: 'PUT',
        path: '/users/me',
        handler: 'user.updateMe'
    });

    return plugin;
}