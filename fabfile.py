from __future__ import with_statement
from fabric.api import local, settings, abort, run, cd, env, prefix
from fabric.contrib.console import confirm


env.hosts = ['webninj1@webninjataylor.com']


def sync():
    local("git status")
    local("git add .")
    local("git commit")
    local("git push origin")


def deploy():
    code_dir = '/home6/webninj1/public_html/websites/parkhilllots/'

    sync()

    with cd(code_dir):
        run("git pull")
